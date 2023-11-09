import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//* MODULOS :
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
//* CONFIGURACION DE NUESTRO STORE / REDUX :
import { appReducer } from 'src/Redux/Store';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, BrowserModule, StoreModule.forRoot(appReducer, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
