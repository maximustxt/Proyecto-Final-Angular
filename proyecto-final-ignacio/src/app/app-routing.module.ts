import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/components/login/pages/login-admin.module').then(
        (m) => m.LoginAdminModule
      ),
  },
  {
    path: 'MisCursos',
    loadChildren: () =>
      import('../app/components/cursos-de-alumnos/pages/pages.module').then(
        (m) => m.PagesMisCursosModule
      ),
  },
  {
    path: 'Estadisticas',
    loadChildren: () =>
      import('../app/components/estadisticas/Page/estadisticas.module').then(
        (m) => m.EstaditicasModule
      ),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('../app/components/home/pages/pages.module').then(
        (m) => m.PagesHomeModule
      ),
  },
  {
    path: 'PerfilAlumno',
    loadChildren: () =>
      import('../app/components/perfil-alumno/pages/perfil-alumno.module').then(
        (m) => m.PerfilAlumnoModule
      ),
  },
  {
    path: 'Administradores',
    loadChildren: () =>
      import('../app/components/administradores/pages/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'LoginEstudiantes',
    loadChildren: () =>
      import(
        '../app/components/login-estudiante/pages/login-estudiante.module'
      ).then((m) => m.LoginEstudianteModule),
  },
  {
    path: 'Alumnos',
    loadChildren: () =>
      import('../app/components/alumnos/pages/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
  },
  {
    path: 'Inscripciones',
    loadChildren: () =>
      import('../app/components/inscripciones/pages/inscripciones.module').then(
        (m) => m.InscripcionesModule
      ),
  },

  {
    path: 'Cursos',
    loadChildren: () =>
      import('../app/components/cursos/pages/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  {
    path: 'DetailAlumno/:id',
    loadChildren: () =>
      import(
        '../app/components/detail-alumno/pages/detail-alumnos.module'
      ).then((m) => m.DetailAlumnosModule),
  },
  {
    path: 'DetailCursos/:id',
    loadChildren: () =>
      import('../app/components/detail-cursos/pages/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  {
    path: 'DetailAdmin/:id',
    loadChildren: () =>
      import('../app/components/detail-admin/pages/admin.module').then(
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
