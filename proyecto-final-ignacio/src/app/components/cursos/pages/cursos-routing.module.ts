import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* COMPONENTE :
import { CursosComponent } from '../cursos.component';
//* GUARDIAN :
import { rutasGuard } from 'src/guards/rutas.guard';

const routes: Routes = [
  { path: '', component: CursosComponent, canActivate: [rutasGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
