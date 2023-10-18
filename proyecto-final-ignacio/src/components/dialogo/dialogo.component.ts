import { Component, EventEmitter, Output, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import axios from "axios";

//*- FORMULARIO :
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

//*- ALERT :
import { ToastrService } from "ngx-toastr";

//*- INTERFACE :
import { IAlumnos } from "../../common/Interfaces";

@Component({
  selector: "app-dialogo",
  templateUrl: "./dialogo.component.html",
  styleUrls: ["./dialogo.component.scss"],
})
export class DialogoComponent {
  CrearAlumno!: FormGroup;
  ImagenUser!: string;

  constructor(
    private FB: FormBuilder,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public Alumno?: IAlumnos
  ) {
    this.CrearAlumno = this.FB.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      edad: [, [Validators.required]],
      imagen: ["", [Validators.required]],
      cursando: ["", [Validators.required]],
    });

    if (this.Alumno?.edad) {
      this.CrearAlumno.patchValue(this.Alumno);
    }
  }

  //*- GETTER DE VALIDACION IMAGEN :

  get ValidacionImagen() {
    return this.CrearAlumno.controls["imagen"];
  }

  //*- ALERTAS :

  AlertaAlumnoEditado() {
    this.toastr.success("Felicitaciones", "Alumno Editado con exito!");
  }

  AlertaAlumnoCreado() {
    this.toastr.success("Felicitaciones", "Alumno Creado con exito!");
  }

  AlertaCamposIncompletos() {
    this.toastr.error(
      "Campos Incompletos",
      "Debes completar todos los campos!"
    );
  }

  AlertaErroresEnLosCampos() {
    this.toastr.error(
      "Hay Errores en los campos",
      "Debes corregir los errores!"
    );
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
    datosImage.append("file", File_data);
    datosImage.append("upload_preset", "Angular_cloudinary");
    datosImage.append("cloud_name", "dpp1n1qjs");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dpp1n1qjs/image/upload",
      datosImage
    );
    this.ImagenUser = response.data.secure_url;
  }
}
