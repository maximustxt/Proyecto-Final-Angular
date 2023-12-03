import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from 'src/Services/Cursos/cursos.service';
import { IAlumnos, ICursos } from 'src/common/Interfaces';

@Component({
  selector: 'app-dialogo-edit',
  templateUrl: './dialogo-edit.component.html',
  styleUrls: ['./dialogo-edit.component.scss'],
})
export class DialogoEditComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogoEditComponent>,
    private ServicesCursos: CursosService,
    @Inject(MAT_DIALOG_DATA) public Alumno?: IAlumnos
  ) {
    if (this.Alumno?.nombre) {
      if (Alumno) {
        this.CursosDelAlumno = this.Alumno.cursos.map((c) => c._id);
        this.courseIdControl.setValue(this.CursosDelAlumno);
      }
    }

    this.ServicesCursos.getCursos().subscribe((date) => {
      this.Cursos = date;
    });
  }

  CerrarDialogo(): void {
    this.dialogRef.close();
  }

  FuncionEdit(e: Event) {}

  OnSubmit() {
    this.dialogRef.close({
      value: this.FormInscripciones.value,
    });
  }

  Cursos!: ICursos[];
  CursosDelAlumno!: number[];

  courseIdControl = new FormControl(this.CursosDelAlumno);

  FormInscripciones = new FormGroup({
    courseId: this.courseIdControl,
  });
}
