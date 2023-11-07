import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { ToastrService } from 'ngx-toastr';
import { IAdmin } from 'src/common/Interfaces';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//* SERVICIO DE ADMINISTRADOR :
import { AdminService } from 'src/Services/Administrador/admin.service';

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
    private toastr: ToastrService,
    private ServiceAdministrador: AdminService,
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
    this.toastr.success('Felicitaciones', 'Administrador Editado con exito!');
  }

  AlertaAdministradorCreado() {
    this.toastr.success('Felicitaciones', 'Administrador Creado con exito!');
  }

  AlertaCamposIncompletos() {
    this.toastr.error(
      'Campos Incompletos',
      'Debes completar todos los campos!'
    );
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
