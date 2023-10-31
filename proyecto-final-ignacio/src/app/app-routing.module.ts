import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//*- COMPONENTES :
import { LoginComponent } from 'src/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'Registro',
    loadChildren: () =>
      import('../components/registro/pages/registro.module').then(
        (m) => m.RegistroModule
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
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
