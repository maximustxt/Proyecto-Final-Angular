import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Store } from '@ngrx/store';
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
import { LoginAlumnosActions } from './pages/store/login-alumnos.actions';
import AgregarAlumno from '../LocalStorage/Alumnos/AgregarAlumno';
//* SELECT LOGIN STUDIENT :
import { selectLoginAlumno } from './pages/store/login-alumnos.selectors';

@Component({
  selector: 'app-login-estudiante',
  templateUrl: './login-estudiante.component.html',
  styleUrls: ['./login-estudiante.component.scss'],
})
export class LoginEstudianteComponent {
  iniciarSesion() {
    throw new Error('Method not implemented.');
  }
  LogeoEstudiante!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private servicioAlumno: AlumnosService,
    private router: Router,
    private toast: HotToastService,
    private store: Store
  ) {
    this.LogeoEstudiante = this.formBuilder.group({
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
      !this.LogeoEstudiante.value.nombre ||
      !this.LogeoEstudiante.value.email ||
      !this.LogeoEstudiante.value.password
    ) {
      this.AlertaCamposIncompletos();
    } else if (this.LogeoEstudiante.invalid) {
      this.AlertaErroresEnLosCampos();
    } else {
      this.store.dispatch(
        LoginAlumnosActions.loadLoginAlumnoss({
          nombre: this.LogeoEstudiante.value.nombre,
        })
      );

      this.store.select(selectLoginAlumno).subscribe({
        next: (value: any) => {
          AgregarAlumno(value);
          if (value?.nombre) {
            this.router.navigate(['Home']);
            this.AlertaAdminLogeado();
            setTimeout(() => {
              document.location.reload();
            }, 50);
          }
        },
        error: (e) => {
          this.AlertaErroresLogin(e.error);
        },
      });
    }
  }
}
