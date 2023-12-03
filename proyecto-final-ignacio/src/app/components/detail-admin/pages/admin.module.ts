import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AdminDetailEffects } from './store/admin-detail.effects';
//* STORE MODULE :
import { StoreModule } from '@ngrx/store';
//* FEATURE DETAIL ADMIN :
import { adminDetailFeature } from './store/admin-detail.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(adminDetailFeature),
    EffectsModule.forFeature([AdminDetailEffects]),
  ],
})
export class AdminModule {}
