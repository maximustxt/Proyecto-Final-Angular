import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import axios from 'axios';
//* COMPONENTE DIALOGO :
import { DialogoComponent } from '../dialogo/dialogo.component';
//* INTERFACE :
import { IAdmin } from 'src/common/Interfaces';
//* ALERTAS :
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dialogo-administradores',
  templateUrl: './dialogo-administradores.component.html',
  styleUrls: ['./dialogo-administradores.component.scss'],
})
export class DialogoAdministradoresComponent {
  CrearAdministrador!: FormGroup;
  ImagenAdmin!: string;
  CursosAdministradors$!: Observable<any>;

  constructor(
    private FB: FormBuilder,
    private toast: HotToastService,
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public Administrador?: IAdmin
  ) {
    this.CrearAdministrador = this.FB.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: [, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      imagen: ['', [Validators.required]],
    });

    if (this.Administrador?.edad) {
      this.CrearAdministrador.patchValue(this.Administrador);
    }
  }

  //*- GETTER DE VALIDACION IMAGEN :

  get ValidacionImagen() {
    return this.CrearAdministrador.controls['imagen'];
  }

  //*- ALERTAS :

  AlertaAdministradorEditado() {
    this.toast.success('Administrador Editado con exito!', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaAdministradorCreado() {
    this.toast.success('Administrador Creado con exito!', {
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

  //*- Funcion Editar Administrador :

  OnEdit() {
    if (this.Administrador) {
      this.AlertaAdministradorEditado();
      this.dialogRef.close({
        ...this.CrearAdministrador.value,
        _id: this.Administrador._id,
        apellido: this.Administrador.apellido,
      }); // Metodo close sirve para enviar los datos y cerrar el dialogo.
    }
  }

  OnSubmit() {
    if (
      !this.CrearAdministrador.value.nombre ||
      !this.CrearAdministrador.value.apellido ||
      !this.CrearAdministrador.value.edad ||
      !this.ImagenAdmin
    ) {
      this.AlertaCamposIncompletos();
    } else if (this.CrearAdministrador.invalid) {
      this.AlertaErroresEnLosCampos();
    } else {
      this.AlertaAdministradorCreado();
      this.dialogRef.close({
        ...this.CrearAdministrador.value,
        imagen: this.ImagenAdmin,
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
    this.ImagenAdmin = response.data.secure_url;
  }

  valoresDelSelect: { value: string; viewValue: string }[] = [
    { value: 'Esta Cursando', viewValue: 'Esta Cursando' },
    { value: 'Abandono', viewValue: 'Abandono' },
    { value: 'Finalizo', viewValue: 'Finalizo' },
  ];
}
