import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//*- COMPONENTDIALOG :
import { DialogoComponent } from '../dialogo/dialogo.component';
//*- ALERTS :
import { ToastrService } from 'ngx-toastr';
//*- INTERFACE :
import { ICursos } from 'src/common/Interfaces';

@Component({
  selector: 'app-dialogo-cursos',
  templateUrl: './dialogo-cursos.component.html',
  styleUrls: ['./dialogo-cursos.component.scss'],
})
export class DialogoCursosComponent {
  CrearCurso!: FormGroup;

  // HACER FECHAS DE INICIO Y FIN , SE MUESTRA EN EL DETAIL. DESCRIBIR LA PAGINA WEB EN GITHUB.

  FechaDeInicio = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  FechaDeFinalizacion = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(
    private FB: FormBuilder,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public Curso?: ICursos
  ) {
    this.CrearCurso = this.FB.group({
      nombre: ['', [Validators.required]],
      profesor: [, [Validators.required]],
      area: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      vacantes: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });

    if (this.Curso?.nombre) {
      this.CrearCurso.patchValue(this.Curso);
    }
  }

  //*- ALERTAS :

  AlertaCursoEditado() {
    this.toastr.success('Felicitaciones', 'Curso Editado con exito!');
  }

  AlertaCursoCreado() {
    this.toastr.success('Felicitaciones', 'Curso Creado con exito!');
  }

  AlertaCamposIncompletos() {
    this.toastr.error(
      'Campos Incompletos',
      'Debes completar todos los campos!'
    );
  }

  AlertaFechaInicioMayorFechaFinal() {
    this.toastr.warning('La fecha De Inicio no debe ser Mayor a la Final');
  }

  AlertaFechaInicioIgualFechaFinal() {
    this.toastr.warning('La fecha De Inicio no debe ser Igual a la Final');
  }

  AlertaErroresEnLosCampos() {
    this.toastr.error(
      'Hay Errores en los campos',
      'Debes corregir los errores!'
    );
  }

  //*- Funcion Salir del Dialogo :

  onNoClick(): void {
    this.dialogRef.close();
  }

  //*- Funcion Editar Alumno :

  OnEdit() {
    if (this.Curso) {
      let FechaI = new Date(this.CrearCurso.value.fechaInicio);
      let FechaF = new Date(this.CrearCurso.value.fechaFinal);

      if (this.CrearCurso.invalid) {
        this.AlertaErroresEnLosCampos();
      } else if (FechaI > FechaF) {
        this.AlertaFechaInicioMayorFechaFinal();
      } else if (FechaI.toDateString() === FechaF.toDateString()) {
        //- Metodo toDateString ==> Convierte las fechas sin horas y segundos.
        this.AlertaFechaInicioIgualFechaFinal();
      } else {
        this.AlertaCursoEditado();
        this.dialogRef.close({ ...this.CrearCurso.value, _id: this.Curso._id }); // Metodo close sirve para enviar los datos y cerrar el dialogo.
      }
    }
  }

  OnSubmit() {
    let FechaI = new Date(this.CrearCurso.value.fechaInicio);
    let FechaF = new Date(this.CrearCurso.value.fechaFinal);

    if (
      !this.CrearCurso.value.nombre ||
      !this.CrearCurso.value.vacantes ||
      !this.CrearCurso.value.profesor ||
      !this.CrearCurso.value.area ||
      !this.CrearCurso.value.fechaInicio ||
      !this.CrearCurso.value.fechaFinal
    ) {
      this.AlertaCamposIncompletos();
    } else if (this.CrearCurso.invalid) {
      this.AlertaErroresEnLosCampos();
    } else if (FechaI > FechaF) {
      this.AlertaFechaInicioMayorFechaFinal();
    } else if (FechaI.toDateString() === FechaF.toDateString()) {
      //- Metodo toDateString ==> Convierte las fechas sin horas y segundos.
      this.AlertaFechaInicioIgualFechaFinal();
    } else {
      this.AlertaCursoCreado();
      this.dialogRef.close({
        ...this.CrearCurso.value,
      }); // Metodo close sirve para enviar los datos y cerrar el dialogo.
    }
  }

  valoresDelSelect: { value: string; viewValue: string }[] = [
    {
      value: 'Programación y Desarrollo',
      viewValue: 'Programación y Desarrollo',
    },
    { value: 'Diseño', viewValue: 'Diseño' },
    { value: 'Seguridad', viewValue: 'Seguridad' },
  ];
}
