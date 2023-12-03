import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoRoutingModule } from './perfil-alumno-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PerfilAlumnoEffects } from './store/perfil-alumno.effects';
//* STORE MODULE :
import { StoreModule } from '@ngrx/store';
//* FETURE STUDIENT :
import { perfilAlumnoFeature } from './store/perfil-alumno.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PerfilAlumnoRoutingModule,
    StoreModule.forFeature(perfilAlumnoFeature),
    EffectsModule.forFeature([PerfilAlumnoEffects]),
  ],
})
export class PerfilAlumnoModule {}
