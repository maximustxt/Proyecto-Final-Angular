import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//*- COMPONENTES :
import { AlumnosComponent } from 'src/components/alumnos/alumnos.component';
import { CursosComponent } from 'src/components/cursos/cursos.component';
import { DetailAlumnoComponent } from 'src/components/detail-alumno/detail-alumno.component';
import { DetailCursosComponent } from 'src/components/detail-cursos/detail-cursos.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegistroComponent } from 'src/components/registro/registro.component';
import { InscripcionesComponent } from 'src/components/inscripciones/inscripciones.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Alumnos', component: AlumnosComponent },
  { path: 'Inscripciones', component: InscripcionesComponent },
  { path: 'Cursos', component: CursosComponent },
  { path: 'DetailAlumno/:id', component: DetailAlumnoComponent },
  { path: 'DetailCursos/:id', component: DetailCursosComponent },
  { path: '**', redirectTo: '/Cursos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
