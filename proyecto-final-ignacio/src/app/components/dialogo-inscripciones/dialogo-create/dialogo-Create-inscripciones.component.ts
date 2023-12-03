import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { DialogoComponent } from '../../dialogo/dialogo.component';
import { IAlumnos, ICursos } from 'src/common/Interfaces';
import { Observable, Subscription } from 'rxjs';
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
import { CursosService } from 'src/Services/Cursos/cursos.service';

@Component({
  selector: 'app-dialogo-inscripciones',
  templateUrl: './dialogo-Create-inscripciones.component.html',
  styleUrls: ['./dialogo-Create-inscripciones.component.scss'],
})
export class DialogoInscripcionesComponent {
  constructor(
    private ServiceAlumno: AlumnosService,
    private ServiceCursos: CursosService,
    public dialogRef: MatDialogRef<DialogoComponent>
  ) {
    //* OBTENEMOS ALUMNOS DESDE REDUX :

    this.Alumnos$ = this.ServiceAlumno.getAlumnos();
    this.Suscribe = this.Alumnos$.subscribe((Alumnos: IAlumnos[]) => {
      this.Alumnos = Alumnos;
    });

    //* OBTENEMOS LOS CURSOS

    this.Cursos$ = this.ServiceCursos.getCursos();
    this.Suscribe = this.Cursos$.subscribe((Cursos: any) => {
      this.Cursos = Cursos;
    });
  }

  //- SUSCRIPTION :
  Suscribe: Subscription = new Subscription();

  //- OBSERVABLE :
  Alumnos$!: Observable<any>;

  //- ARRAY DE ALUMNOS :
  Alumnos!: IAlumnos[];

  //- OBSERVABLES :
  Cursos$!: Observable<any>;

  //- ARRAY DE CURSOS :
  Cursos!: ICursos[];

  userIdControl = new FormControl();
  courseIdControl = new FormControl();

  FormInscripciones = new FormGroup({
    courseId: this.courseIdControl,
    userId: this.userIdControl,
  });

  InscripcionForm = new FormGroup({});

  CerrarDialogo(): void {
    this.dialogRef.close();
  }

  OnSubmit() {
    this.dialogRef.close({
      ...this.FormInscripciones.value,
    });
  }
}
