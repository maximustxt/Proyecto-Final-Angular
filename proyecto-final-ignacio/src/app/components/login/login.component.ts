import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//*- SERVICIOS :
import { AdminService } from 'src/Services/Administrador/admin.service';
//*- ALERT :
import { HotToastService } from '@ngneat/hot-toast';
//* STORE :
import { Store } from '@ngrx/store';
//* LOCAL STORAGE :
import AgregarAdministrador from '../LocalStorage/Admin/AgregarAdministrador';
//* ACTIOSN :
import { LoginAdminActions } from './pages/store/login-admin.actions';
//* SELECT LOGIN ADMIN :
import { selectLoginAdmin } from './pages/store/login-admin.selectors';

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
    private router: Router,
    private toast: HotToastService,
    private store: Store
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
      this.store.dispatch(
        LoginAdminActions.loadLoginAdmins({ data: this.LogeoAdmin.value })
      );

      this.store.select(selectLoginAdmin).subscribe({
        next: (value: any) => {
          if (value) {
            AgregarAdministrador(value);
            this.router.navigate(['Alumnos']);
            this.AlertaAdminLogeado();
            setTimeout(() => {
              document.location.reload();
            }, 50);
          }
        },
      });
    }
  }
}
