import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//*- LOCALSTORAGE :
import SubirAdminLogeado from '../LocalStorage/SubirAdminLogeado';

//*- SERVICIOS :
import { AdminService } from 'src/Services/Administrador/admin.service';

//*- ALERT :
import { HotToastService } from '@ngneat/hot-toast';

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
    private toast: HotToastService
  ) {
    this.LogeoAdmin = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  //*- ALERTAS :

  AlertaAdminLogeado() {
    this.toast.success('Te haz logeado con exito! :)', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaCamposIncompletos() {
    this.toast.warning('Campos Incompletos', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaErroresEnLosCampos() {
    this.toast.warning('Hay Errores en los campos', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  AlertaErroresLogin(error: string) {
    this.toast.error(`${error}`, {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
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
      this.servicioAdmin.LoginAdmin(this.LogeoAdmin.value).subscribe({
        next: (value: any) => {
          this.AlertaAdminLogeado();
          // GUARDAR LOS DATOS DEL ADMIN EN EL LOCALSTORAGE :
          setTimeout(() => {
            document.location.reload();
          }, 200);
          SubirAdminLogeado(value);
          this.router.navigate(['Alumnos']);
        },
        error: (e) => {
          this.AlertaErroresLogin(e.error);
        },
      });
    }
  }
}
