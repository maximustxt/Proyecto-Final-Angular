import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEstudianteComponent } from '../login-estudiante.component';
//* GUARDIAN :
import { authAlumnoGuard } from 'src/guards/auth-alumno.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginEstudianteComponent,
    canActivate: [authAlumnoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEstudianteRoutingModule {}
