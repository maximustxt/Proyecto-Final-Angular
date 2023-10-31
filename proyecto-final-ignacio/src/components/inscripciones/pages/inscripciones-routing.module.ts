import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* COMPONENTE :
import { InscripcionesComponent } from '../inscripciones.component';
//* GUARDIAN :
import { rutasGuard } from 'src/core/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: InscripcionesComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesRoutingModule {}
