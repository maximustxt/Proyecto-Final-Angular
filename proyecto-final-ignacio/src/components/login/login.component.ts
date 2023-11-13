import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//*- SERVICIOS :
import { AdminService } from 'src/Services/Administrador/admin.service';
//*- ALERT :
import { HotToastService } from '@ngneat/hot-toast';
//* STORE :
import { Store } from '@ngrx/store';
//* ACCIONES :
import { conunterAxions } from 'src/Redux/Actions/Actions';
//* SELECTOR DEL ESTADO :
import { SelectAuthUser } from 'src/Redux/Selectors/Selectores';
//* LOCAL STORAGE :
import AgregarUser from '../LocalStorage/AgregarUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  iniciarSesion() {
    throw new Error('Method not implemented.');
  }
  LogeoAdmin!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private servicioAdmin: AdminService,
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
      this.servicioAdmin.LoginAdmin(this.LogeoAdmin.value).subscribe({
        next: (value: any) => {
          // INTERACCION CON EL ESTADO DE REDUX :
          this.store.dispatch(
            conunterAxions.login({ EstadoDelUsuario: value })
          );
          //* OBTENEMOS EL ESTADO DE REDUX Y GUARDAMOS EN LOCAL STORAGE :
          this.store.select(SelectAuthUser).subscribe((value) => {
            AgregarUser(value);
          });
          this.router.navigate(['Alumnos']);
          this.AlertaAdminLogeado();
        },
        error: (e) => {
          this.AlertaErroresLogin(e.error);
        },
      });
    }
  }
}
