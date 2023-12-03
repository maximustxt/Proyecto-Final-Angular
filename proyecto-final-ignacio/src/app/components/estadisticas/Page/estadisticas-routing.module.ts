import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from '../estadisticas.component';
import { rutasGuard } from 'src/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: EstadisticasComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstaditicasRoutingModule {}
