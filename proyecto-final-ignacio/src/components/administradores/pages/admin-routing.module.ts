import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* COMPONENTE :
import { AdministradoresComponent } from '../administradores.component';
//* GUARDIAN :
import { rutasGuard } from 'src/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: AdministradoresComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
