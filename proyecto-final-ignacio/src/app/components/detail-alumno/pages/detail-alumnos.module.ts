import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAlumnosRoutingModule } from './detail-alumnos-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AlumnoDetailEffects } from './store/alumno-detail.effects';
import { StoreModule } from '@ngrx/store';
//* FEATURE DETAIL STUDIEN :
import { alumnoDetailFeature } from './store/alumno-detail.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetailAlumnosRoutingModule,
    StoreModule.forFeature(alumnoDetailFeature),
    EffectsModule.forFeature([AlumnoDetailEffects]),
  ],
})
export class DetailAlumnosModule {}
