import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlumnos } from 'src/common/Interfaces';

@Component({
  selector: 'app-dialogo-delete',
  templateUrl: './dialogo-delete.component.html',
  styleUrls: ['./dialogo-delete.component.scss'],
})
export class DialogoDeleteComponent {
  Alumno!: IAlumnos | undefined;
  ArrayDeCursosEliminar: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno?: IAlumnos
  ) {
    if (this.alumno?.nombre) {
      this.Alumno = alumno;
    }
  }
  CerrarDialogo(): void {
    this.dialogRef.close();
  }

  FuncionEliminarInscripcion(event: any) {
    this.ArrayDeCursosEliminar.push(event.target.value);
  }

  OnSubmit() {
    this.dialogRef.close({
      // se le pasa data :
      CursosEliminar: this.ArrayDeCursosEliminar,
    });
  }
}
