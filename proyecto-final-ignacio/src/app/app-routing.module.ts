import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//*- COMPONENTES :
import { AlumnosComponent } from "src/components/alumnos/alumnos.component";
import { CursosComponent } from "src/components/cursos/cursos.component";

const routes: Routes = [
  { path: "", component: AlumnosComponent },
  { path: "Cursos", component: CursosComponent },
  // { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
