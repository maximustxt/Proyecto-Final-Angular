import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstaditicasRoutingModule } from './estadisticas-routing.module';
import { EffectsModule } from '@ngrx/effects';
import {
  EstadisticasEffectsAlumnos,
  EstadisticasEffectsAdministradores,
  EstadisticasEffectsCursos,
} from './store/estadisticas.effects';
import { StoreModule } from '@ngrx/store';
import { estadisticasFeature } from './store/estadisticas.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstaditicasRoutingModule,
    StoreModule.forFeature(estadisticasFeature),
    EffectsModule.forFeature([
      EstadisticasEffectsAlumnos,
      EstadisticasEffectsAdministradores,
      EstadisticasEffectsCursos,
    ]),
  ],
})
export class EstaditicasModule {}
