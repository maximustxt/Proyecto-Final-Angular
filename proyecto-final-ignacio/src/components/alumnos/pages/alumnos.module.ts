import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './store/alumnos.effects';
//* MODULE STORE ALUMNOS :
import { StoreModule } from '@ngrx/store';
//* FEATURE ALUMNOS :
import { alumnosFeature } from './store/alumnos.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    StoreModule.forFeature(alumnosFeature),
    EffectsModule.forFeature([AlumnosEffects]),
  ],
})
export class AlumnosModule {}
