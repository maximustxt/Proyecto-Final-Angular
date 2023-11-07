import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//*- SERVICIOS :
import { AdminService } from 'src/Services/Administrador/admin.service';

//*- ALERT :
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  RegistroAdmin!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private servicioAdmin: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.RegistroAdmin = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  //*- ALERTAS :

  AlertaAdminRegistrado() {
    this.toastr.success('Felicitaciones', 'Te haz registrado con exito! :)');
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

  AlertaErroresRegistro(error: string) {
    this.toastr.error(`${error}`);
  }

  SubmitRegistro() {
    if (
      !this.RegistroAdmin.value.nombre ||
      !this.RegistroAdmin.value.telefono ||
      !this.RegistroAdmin.value.email ||
      !this.RegistroAdmin.value.password
    ) {
      this.AlertaCamposIncompletos();
    } else if (this.RegistroAdmin.invalid) {
      this.AlertaErroresEnLosCampos();
    } else {
      // this.servicioAdmin.RegistroAdmin(this.RegistroAdmin.value).subscribe({
      //   next: (value) => {
      //     this.AlertaAdminRegistrado();
      //     this.router.navigate(['']);
      //   },
      //   error: (e) => this.AlertaErroresRegistro(e.error),
      // });
    }
  }
}
