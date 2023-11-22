import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
//* STORE MODULE :
import { StoreModule } from '@ngrx/store';
//* FEATURE COURSES HOME :
import { homeFeature } from './store/home.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    StoreModule.forFeature(homeFeature),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class PagesHomeModule {}
