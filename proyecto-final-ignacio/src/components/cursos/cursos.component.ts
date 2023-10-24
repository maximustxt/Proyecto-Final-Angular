import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

//*- SERVICES :
import { CursosService } from 'src/Services/Cursos/cursos.service';

//*- INTERFACE :
import { ICursos } from 'src/common/Interfaces';

//*- COMPONENTE DIALOGO :
import { DialogoCursosComponent } from '../dialogo-cursos/dialogo-cursos.component';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit, OnDestroy {
  constructor(
    public dialog: MatDialog,
    private ServiceCurso: CursosService,
    private router: Router
  ) {}

  //- SUSCRIPTION :
  Suscribe: Subscription = new Subscription();

  //- OBSERVABLES :
  Cursos$!: Observable<any>;

  //- ARRAY DE CURSOS :
  Cursos!: ICursos[];

  displayedColumns: string[] = [
    'Nombre',
    'Profesor',
    'Area',
    'Vacantes',
    'Acciones',
  ];

  dataSource = new MatTableDataSource(this.Cursos);

  ngOnInit(): void {
    this.Cursos$ = this.ServiceCurso.getCursos();

    this.Suscribe = this.Cursos$.subscribe((Cursos: any) => {
      this.Cursos = Cursos;
      this.dataSource = new MatTableDataSource(this.Cursos);
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

  //*- ELIMINAR CURSO:

  eliminarCurso(id: string) {
    this.Cursos$ = this.ServiceCurso.deleteCursos(id);

    this.Suscribe = this.Cursos$.subscribe((Cursos: any) => {
      this.Cursos = Cursos;
      this.dataSource = new MatTableDataSource(this.Cursos);
    });
  }

  //*- EDITAR CURSO:

  EditCurso(Curso: ICursos) {
    this.dialog
      .open(DialogoCursosComponent, { data: Curso, maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Curso) => {
          if (Curso) {
            this.Cursos$ = this.ServiceCurso.putCursos(Curso._id, Curso);

            this.Suscribe = this.Cursos$.subscribe((Cursos: any) => {
              this.Cursos = Cursos;
              this.dataSource = new MatTableDataSource(this.Cursos);
            });
          }
        },
      });
  }

  //*- CREAR CURSO:

  openDialog(): void {
    this.dialog
      .open(DialogoCursosComponent, { maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Curso) => {
          this.Cursos$ = this.ServiceCurso.postCursos(Curso);

          this.Suscribe = this.Cursos$.subscribe((Cursos: any) => {
            this.Cursos = Cursos;
            this.dataSource = new MatTableDataSource(this.Cursos);
          });
        },
      });
  }

  VerCurso(id: string) {
    this.router.navigate(['DetailCursos', id]);
  }

  ngOnDestroy(): void {
    // Cuando el componente se desmonte.
    this.Suscribe.unsubscribe();
  }
}
