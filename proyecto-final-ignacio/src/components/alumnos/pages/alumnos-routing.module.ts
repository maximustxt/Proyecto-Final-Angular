import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* COMPONENTES :
import { AlumnosComponent } from '../alumnos.component';
//* GUARDIAN :
import { rutasGuard } from 'src/core/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: AlumnosComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
