import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CursosDetailEffects } from './store/cursos-detail.effects';
import { StoreModule } from '@ngrx/store';
import { cursosDetailFeature } from './store/cursos-detail.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    StoreModule.forFeature(cursosDetailFeature),
    EffectsModule.forFeature([CursosDetailEffects]),
  ],
})
export class CursosModule {}
