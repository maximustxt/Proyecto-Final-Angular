import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* COMPONENTE :
import { DetailAlumnoComponent } from '../detail-alumno.component';
//* GUARDIAN :
import { rutasGuard } from 'src/core/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: DetailAlumnoComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAlumnosRoutingModule {}
