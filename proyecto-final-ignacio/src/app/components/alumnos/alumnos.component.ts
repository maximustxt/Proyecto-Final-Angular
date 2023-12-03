import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

//- Interfaces :
import { IAlumnos } from '../../../common/Interfaces';

//*- SERVICIOS DE ALUMNO :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';

// Tabla :
import { MatTableDataSource } from '@angular/material/table';

//- Paginacion :
import { MatPaginator } from '@angular/material/paginator';

//- LocalStorage :
import { MatDialog } from '@angular/material/dialog';

//- Componente Dialogo :
import { DialogoComponent } from '../dialogo/dialogo.component';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

//* SELECT ALUMNOS :
import { selectAlumnos } from './pages/store/alumnos.selectors';

//* ACTIONS :
import { AlumnosActions } from './pages/store/alumnos.actions';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit, OnDestroy {
  constructor(
    public dialog: MatDialog,
    private ServiceAlumno: AlumnosService,
    private router: Router,
    private store: Store
  ) {}

  //- SUSCRIPTION :
  Suscribe: Subscription = new Subscription();

  //- OBSERVABLE :
  Alumnos$!: Observable<any>;

  //- ARRAY DE ALUMNOS :
  Alumnos!: IAlumnos[];

  displayedColumns: string[] = [
    'Nombre',
    'Edad',
    'Imagen',
    'Cursando',
    'Acciones',
  ];

  dataSource = new MatTableDataSource(this.Alumnos);

  ngOnInit(): void {
    this.store.dispatch(AlumnosActions.loadAlumnoss());
    this.Alumnos$ = this.store.select(selectAlumnos);
    this.Suscribe = this.Alumnos$.subscribe((Alumnos: IAlumnos[]) => {
      this.Alumnos = Alumnos;
      this.dataSource = new MatTableDataSource(this.Alumnos);
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

  eliminarAlumno(id: string) {
    this.Alumnos$ = this.ServiceAlumno.deleteAlumnos(id);

    this.Suscribe = this.Alumnos$.subscribe((Alumnos: any) => {
      this.Alumnos = Alumnos;
      this.dataSource = new MatTableDataSource(this.Alumnos);
    });
  }

  //*- EDITAR ALUMNO :

  EditAlumno(Alumno: IAlumnos) {
    this.dialog
      .open(DialogoComponent, { data: Alumno, maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Alumno) => {
          if (Alumno) {
            this.Alumnos$ = this.ServiceAlumno.putAlumnos(Alumno._id, Alumno);

            this.Suscribe = this.Alumnos$.subscribe((Alumnos: any) => {
              this.Alumnos = Alumnos;
              this.dataSource = new MatTableDataSource(this.Alumnos);
            });
          }
        },
      });
  }

  //*- CREAR ALUMNO :

  openDialog(): void {
    this.dialog
      .open(DialogoComponent, { maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Alumno) => {
          this.Alumnos$ = this.ServiceAlumno.postAlumnos(Alumno);

          this.Suscribe = this.Alumnos$.subscribe((Alumnos: any) => {
            this.Alumnos = Alumnos;
            this.dataSource = new MatTableDataSource(this.Alumnos);
          });
        },
      });
  }

  VerAlumno(id: string) {
    this.router.navigate(['DetailAlumno', id]);
  }

  ngOnDestroy(): void {
    // Cuando el componente se desmonta nos de-suscribimos.
    this.Suscribe.unsubscribe();
  }
}
