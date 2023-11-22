import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginEstudianteRoutingModule } from './login-estudiante-routing.module';
//* MODULO DE EFFECTS :
import { EffectsModule } from '@ngrx/effects';
//* EFFECTS :
import { LoginAlumnosEffects } from './store/login-alumnos.effects';
//* MODULO DE STORE :
import { StoreModule } from '@ngrx/store';
//* FEATURE :
import { loginAlumnosFeature } from './store/login-alumnos.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(loginAlumnosFeature),
    LoginEstudianteRoutingModule,
    EffectsModule.forFeature([LoginAlumnosEffects]),
  ],
})
export class LoginEstudianteModule {}
