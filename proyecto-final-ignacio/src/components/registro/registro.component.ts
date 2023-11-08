import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//*- ALERT :
import { HotToastService } from '@ngneat/hot-toast';

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
    private toast: HotToastService
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
    this.toast.success('Te haz registrado con exito! :)');
  }

  AlertaCamposIncompletos() {
    this.toast.warning('Campos Incompletos');
  }

  AlertaErroresEnLosCampos() {
    this.toast.warning('Hay Errores en los campos');
  }

  AlertaErroresRegistro(error: string) {
    this.toast.error(`${error}`);
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
