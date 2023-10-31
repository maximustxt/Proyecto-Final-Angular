import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//* MODULOS :
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
