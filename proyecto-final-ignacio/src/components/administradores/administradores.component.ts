import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/Services/Administrador/admin.service';
import { Observable, Subscription } from 'rxjs';
import { IAdmin } from 'src/common/Interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { DialogoAdministradoresComponent } from '../dialogo-administradores/dialogo-administradores.component';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.scss'],
})
export class AdministradoresComponent {
  ContadorObsevableRedux$!: Observable<any>;

  constructor(
    public dialog: MatDialog,
    private ServiceAdmin: AdminService,
    private router: Router
  ) {}

  // //- SUSCRIPTION :
  Suscribe: Subscription = new Subscription();
  //- OBSERVABLE :
  Administrador$!: Observable<any>;
  //- ARRAY DE Administrador :
  Administrador!: IAdmin[];
  displayedColumns: string[] = [
    'Nombre',
    'Email',
    'Edad',
    'Imagen',
    'Acciones',
  ];
  dataSource = new MatTableDataSource(this.Administrador);

  ngOnInit(): void {
    this.Administrador$ = this.ServiceAdmin.getAdministradores();
    this.Suscribe = this.Administrador$.subscribe((Administrador: any) => {
      this.Administrador = Administrador;
      this.dataSource = new MatTableDataSource(this.Administrador);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //*- ELIMINAR ALUMNO :
  eliminarAdministrador(id: string) {
    this.Administrador$ = this.ServiceAdmin.DeleteAdministradores(id);
    this.Suscribe = this.Administrador$.subscribe((Administrador: any) => {
      this.Administrador = Administrador;
      this.dataSource = new MatTableDataSource(this.Administrador);
    });
  }

  //*- EDITAR ALUMNO :
  EditAdministrador(Alumno: IAdmin) {
    this.dialog
      .open(DialogoAdministradoresComponent, { data: Alumno, maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Alumno) => {
          if (Alumno) {
            this.Administrador$ = this.ServiceAdmin.PutAdministrador(
              Alumno,
              Alumno._id
            );
            this.Suscribe = this.Administrador$.subscribe(
              (Administrador: any) => {
                this.Administrador = Administrador;
                this.dataSource = new MatTableDataSource(this.Administrador);
              }
            );
          }
        },
      });
  }

  //*- CREAR ADMINISTRADOR :
  openDialog(): void {
    this.dialog
      .open(DialogoAdministradoresComponent, { maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Admin) => {
          this.Administrador$ = this.ServiceAdmin.PostAdministrador(Admin);
          this.Suscribe = this.Administrador$.subscribe(
            (Administrador: any) => {
              this.Administrador = Administrador;
              this.dataSource = new MatTableDataSource(this.Administrador);
            }
          );
        },
      });
  }

  VerAdministrador(id: string) {
    this.router.navigate(['DetailAdmin', id]);
  }

  ngOnDestroy(): void {
    // Cuando el componente se desmonta nos de-suscribimos.
    this.Suscribe.unsubscribe();
  }
}
