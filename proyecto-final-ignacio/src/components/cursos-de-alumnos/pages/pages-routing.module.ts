import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* COMPONENTE :
import { CursosDeAlumnosComponent } from '../cursos-de-alumnos.component';

const routes: Routes = [{ path: '', component: CursosDeAlumnosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
