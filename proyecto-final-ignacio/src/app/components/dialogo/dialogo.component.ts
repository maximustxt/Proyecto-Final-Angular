import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import axios from 'axios';

//*- FORMULARIO :
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

//*- ALERT :
import { HotToastService } from '@ngneat/hot-toast';

//*- INTERFACE :
import { IAlumnos } from '../../../common/Interfaces';

//*- SERVICES :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss'],
})
export class DialogoComponent implements OnInit {
  CrearAlumno!: FormGroup;
  ImagenUser!: string;
  CursosAlumnos$!: Observable<any>;

  constructor(
    private FB: FormBuilder,
    private toast: HotToastService,
    private ServiceAlumno: AlumnosService,
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public Alumno?: IAlumnos
  ) {
    this.CrearAlumno = this.FB.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: [, [Validators.required]],
      imagen: ['', [Validators.required]],
      cursando: ['', [Validators.required]],
    });

    if (this.Alumno?.edad) {
      this.CrearAlumno.patchValue(this.Alumno);
    }
  }

  ngOnInit() {
    this.CursosAlumnos$ = this.ServiceAlumno.getCursosAlumnos();
  }

  //*- GETTER DE VALIDACION IMAGEN :

  get ValidacionImagen() {
    return this.CrearAlumno.controls['imagen'];
  }

  //*- ALERTAS :

  AlertaAlumnoEditado() {
    this.toast.success('Alumno Editado con exito!', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaAlumnoCreado() {
    this.toast.success('Alumno Creado con exito!', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaCamposIncompletos() {
    this.toast.error('Campos Incompletos', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaErroresEnLosCampos() {
    this.toast.error('Hay Errores en los campos', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  //*- Funcion Salir del Dialogo :

  onNoClick(): void {
    this.dialogRef.close();
  }

  //*- Funcion Editar Alumno :

  OnEdit() {
    if (this.Alumno) {
      this.AlertaAlumnoEditado();
      this.dialogRef.close({ ...this.CrearAlumno.value, _id: this.Alumno._id }); // Metodo close sirve para enviar los datos y cerrar el dialogo.
    }
  }

  OnSubmit() {
    if (
      !this.CrearAlumno.value.nombre ||
      !this.CrearAlumno.value.apellido ||
      !this.CrearAlumno.value.edad ||
      !this.ImagenUser
    ) {
      this.AlertaCamposIncompletos();
    } else if (this.CrearAlumno.invalid) {
      this.AlertaErroresEnLosCampos();
    } else {
      this.AlertaAlumnoCreado();
      this.dialogRef.close({
        ...this.CrearAlumno.value,
        imagen: this.ImagenUser,
      }); // Metodo close sirve para enviar los datos y cerrar el dialogo.
    }
  }

  //*- METODO PARA SUBIR IMAGEN EN CLOUDINARY :

  async ChageUploadImage(event: any) {
    const File_data = event.target.files[0];
    const datosImage = new FormData();
    datosImage.append('file', File_data);
    datosImage.append('upload_preset', 'Angular_cloudinary');
    datosImage.append('cloud_name', 'dpp1n1qjs');

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/dpp1n1qjs/image/upload',
      datosImage
    );
    this.ImagenUser = response.data.secure_url;
  }

  valoresDelSelect: { value: string; viewValue: string }[] = [
    { value: 'Esta Cursando', viewValue: 'Esta Cursando' },
    { value: 'Abandono', viewValue: 'Abandono' },
    { value: 'Finalizo', viewValue: 'Finalizo' },
  ];
}
