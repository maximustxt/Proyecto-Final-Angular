import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//*- LOCALSTORAGE :
import SubirAdminLogeado from '../LocalStorage/SubirAdminLogeado';

//*- SERVICIOS :
import { AdminService } from 'src/Services/Administrador/admin.service';

//*- ALERT :
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  LogeoAdmin!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private servicioAdmin: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.LogeoAdmin = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  //*- ALERTAS :

  AlertaAdminLogeado() {
    this.toastr.success('Felicitaciones', 'Te haz logeado con exito! :)');
  }

  AlertaCamposIncompletos() {
    this.toastr.warning(
      'Campos Incompletos',
      'Debes completar todos los campos!'
    );
  }

  AlertaErroresEnLosCampos() {
    this.toastr.warning(
      'Hay Errores en los campos',
      'Debes corregir los errores!'
    );
  }

  AlertaErroresLogin(error: string) {
    this.toastr.error(`${error}`);
  }

  SubmitLogin() {
    // Enviarlo a la base de datos. y verificar que exista el usuario.
    if (
      !this.LogeoAdmin.value.nombre ||
      !this.LogeoAdmin.value.email ||
      !this.LogeoAdmin.value.password
    ) {
      this.AlertaCamposIncompletos();
    } else if (this.LogeoAdmin.invalid) {
      this.AlertaErroresEnLosCampos();
    } else {
      this.servicioAdmin.LoginAdmin(this.LogeoAdmin.value.nombre).subscribe({
        next: (value: any) => {
          this.AlertaAdminLogeado();

          // GUARDAR LOS DATOS DEL ADMIN EN EL LOCALSTORAGE :
          SubirAdminLogeado({
            id: value._id,
            email: value.email,
            nombre: value.nombre,
          });

          setTimeout(() => {
            document.location.reload();
          }, 500);

          this.router.navigate(['Alumnos']);
        },
        error: (e) => {
          this.AlertaErroresLogin(e.error);
        },
      });
    }
  }
}
