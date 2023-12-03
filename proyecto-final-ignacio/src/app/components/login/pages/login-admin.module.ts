import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { EffectsModule } from '@ngrx/effects';
//* EFFECTS ADMIN :
import { LoginAdminEffects } from './store/login-admin.effects';
//* STORE MODULE :
import { StoreModule } from '@ngrx/store';
//* FEATURE ADMIN :
import { loginAdminFeature } from './store/login-admin.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginAdminRoutingModule,
    StoreModule.forFeature(loginAdminFeature),
    EffectsModule.forFeature([LoginAdminEffects]),
  ],
})
export class LoginAdminModule {}
