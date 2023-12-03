import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
//* FEATURE ADMINISTRADOR :
import { adminFeature } from './store/admin.reducer';
//* MODULE STORE :
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(adminFeature),
    AdminRoutingModule,
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminModule {}
