import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
//* STORE MODULE :
import { StoreModule } from '@ngrx/store';
//* FEATURE INSCRIPTIONS :
import { inscripcionesFeature } from './store/inscripciones.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(inscripcionesFeature),
    InscripcionesRoutingModule,
    EffectsModule.forFeature([InscripcionesEffects]),
  ],
})
export class InscripcionesModule {}
