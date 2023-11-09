import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//*- COMPONENTES :
import { LoginComponent } from 'src/components/login/login.component';
//* GUARDIAN :
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  // { path: '', component: LoginComponent },
  {
    path: 'Administradores',
    loadChildren: () =>
      import('../components/administradores/pages/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'Alumnos',
    loadChildren: () =>
      import('../components/alumnos/pages/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
  },
  {
    path: 'Inscripciones',
    loadChildren: () =>
      import('../components/inscripciones/pages/inscripciones.module').then(
        (m) => m.InscripcionesModule
      ),
  },

  {
    path: 'Cursos',
    loadChildren: () =>
      import('../components/cursos/pages/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  {
    path: 'DetailAlumno/:id',
    loadChildren: () =>
      import('../components/detail-alumno/pages/detail-alumnos.module').then(
        (m) => m.DetailAlumnosModule
      ),
  },
  {
    path: 'DetailCursos/:id',
    loadChildren: () =>
      import('../components/detail-cursos/pages/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  {
    path: 'DetailAdmin/:id',
    loadChildren: () =>
      import('../components/detail-admin/pages/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
