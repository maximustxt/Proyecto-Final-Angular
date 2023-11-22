import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
//* SELECT INSCRIPTION :
import { selectInscripciones } from './pages/store/inscripciones.selectors';
//* ACTIONS :
import { InscripcionesActions } from './pages/store/inscripciones.actions';
import { MatDialog } from '@angular/material/dialog';
//* SERVICES :
import { InscripcionesService } from 'src/Services/Inscripciones/inscripciones.service';
//* ALERTS :
import { HotToastService } from '@ngneat/hot-toast';
//* DIALOGOS :
import { DialogoInscripcionesComponent } from '../dialogo-inscripciones/dialogo-create/dialogo-Create-inscripciones.component';
import { DialogoDeleteComponent } from '../dialogo-inscripciones/dialogo-delete/dialogo-delete.component';
import { DialogoEditComponent } from '../dialogo-inscripciones/dialogo-edit/dialogo-edit.component';
import { IAlumnos } from 'src/common/Interfaces';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    public dialog: MatDialog,
    private ServicesInscripciones: InscripcionesService,
    private toast: HotToastService
  ) {}
  AlumnosInscriptos: any[] = [];
  Suscription: Subscription = new Subscription();

  dataSource = new MatTableDataSource(this.AlumnosInscriptos);
  displayedColumns: string[] = ['Alumno', 'Cursos Inscripto', 'Acciones'];

  ngOnInit(): void {
    this.store.dispatch(InscripcionesActions.loadInscripcioness());

    this.Suscription = this.store
      .select(selectInscripciones)
      .subscribe(async (value: any) => {
        if (value) {
          this.AlumnosInscriptos = value.filter(
            (a: IAlumnos) => a.cursos.length > 0
          );
          this.dataSource = new MatTableDataSource(this.AlumnosInscriptos);
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //*- ALERTAS :

  AlertaInscripcionSuccess(valor: string) {
    this.toast.success(`${valor}`, {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaErrorInscripcion(error: string) {
    this.toast.warning(`${error}`, {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  //*- CREAR INSCRIPCION :

  openDialog(): void {
    this.dialog
      .open(DialogoInscripcionesComponent, { maxWidth: '100%' })
      .afterClosed()
      .subscribe({
        next: (Inscripcion: any) => {
          const { courseId, userId } = Inscripcion;

          const AlumnoYaCreado = this.AlumnosInscriptos.find(
            (a) => a._id === userId
          );

          // ACA  ARIA EL POST DEL ALUMNO CON SUS CURSOS.

          if (!AlumnoYaCreado) {
            this.ServicesInscripciones.PostInscripciones(
              userId,
              courseId
            ).subscribe({
              next: (v: any) => {
                this.AlertaInscripcionSuccess(v);
                document.location.reload();
              },
              error: (e) => this.AlertaErrorInscripcion(e),
            });
          } else {
            this.AlertaErrorInscripcion('Inscripcion ya creada!');
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.Suscription.unsubscribe();
  }

  //*- ELIMINAR INSCRIPCION :

  eliminarAdministrador(Alumno: IAlumnos) {
    this.dialog
      .open(DialogoDeleteComponent, { data: Alumno, maxWidth: '100%' })
      .afterClosed()
      .subscribe(({ CursosEliminar }) => {
        this.ServicesInscripciones.DeleteInscripcionesDelAlumno(
          Alumno._id,
          CursosEliminar
        ).subscribe(() => {
          this.store.dispatch(InscripcionesActions.loadInscripcioness());

          this.Suscription = this.store
            .select(selectInscripciones)
            .subscribe(async (value: any) => {
              const alumnosModificados = [];

              for (const a of value) {
                if (a._id) {
                  const date: any =
                    await this.ServicesInscripciones.GetInscripcionesDelAlumno(
                      a._id
                    ).toPromise(); // Convertir Observable a Promise para poder usar await

                  // Utilizamos un conjunto (Set) para evitar cursos duplicados
                  const cursosSet = new Set<string>();

                  // Filtramos los cursos duplicados y los agregamos al conjunto
                  const cursosFiltrados = date.filter((curso: any) => {
                    if (curso._id) {
                      const cursoId = curso._id.toString();
                      if (!cursosSet.has(cursoId)) {
                        cursosSet.add(cursoId);
                        return true;
                      }
                    }
                    return false;
                  });

                  const alumnoModificado = {
                    _id: a?._id,
                    nombre: a?.nombre,
                    apellido: a?.apellido,
                    cursos: cursosFiltrados,
                  };

                  if (alumnoModificado.cursos.length > 0) {
                    alumnosModificados.push(alumnoModificado);
                  }
                }
              }

              this.AlumnosInscriptos = alumnosModificados;
              this.dataSource = new MatTableDataSource(alumnosModificados);
            });
        });
      });
  }

  //*- EDITAR INSCRIPCION :

  EditAdministrador(Alumno: IAlumnos) {
    this.dialog
      .open(DialogoEditComponent, { data: Alumno, maxWidth: '100%' })
      .afterClosed()
      .subscribe((value) => {
        if (Alumno._id)
          this.ServicesInscripciones.PutInscripcionesDelAlumno(
            Alumno._id,
            value.value.courseId
          ).subscribe((data: any) => {
            this.AlumnosInscriptos = data;
            this.dataSource = new MatTableDataSource(this.AlumnosInscriptos);
            document.location.reload();
          });
      });
  }
}
