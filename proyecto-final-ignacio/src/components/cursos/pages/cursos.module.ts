import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './store/cursos.effects';
//* MODULE STORE :
import { StoreModule } from '@ngrx/store';
//* FEATURE CURSOS :
import { cursosFeature } from './store/cursos.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    StoreModule.forFeature(cursosFeature),
    EffectsModule.forFeature([CursosEffects]),
  ],
})
export class CursosModule {}
