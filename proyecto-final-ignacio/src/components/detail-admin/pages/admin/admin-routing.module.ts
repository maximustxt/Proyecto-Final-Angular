import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTE :
import { DetailAdminComponent } from '../../detail-admin.component';
//* GUARDIAN :
import { rutasGuard } from 'src/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: DetailAdminComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
