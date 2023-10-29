import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

//*- MODULO DE RUTAS :
import { AppRoutingModule } from '../app-routing.module';

//*- ALERTAS TOASTER :
import { ToastrModule } from 'ngx-toastr';

//*- Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

//*- ANIMACION DE ANGULAR MATERIAL :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//*- MODULO DE CALENDARIO :
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//*- MODULO DE FORMULARIOS :
import { ReactiveFormsModule } from '@angular/forms';

//*- PIPES :
import { PipeNombreApellidoPipe } from '../../pipes/pipe-nombre-apellido.pipe';

//*- DIRECTIVAS :
import { TitleFontSizeDirective } from '../../directives/title-font-size.directive';

//*- Components :
import { FooterComponent } from '../../components/footer/footer.component';
import { AlumnosComponent } from '../../components/alumnos/alumnos.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { DialogoComponent } from 'src/components/dialogo/dialogo.component';
import { DialogoCursosComponent } from 'src/components/dialogo-cursos/dialogo-cursos.component';
import { CursosComponent } from 'src/components/cursos/cursos.component';
import { DetailAlumnoComponent } from 'src/components/detail-alumno/detail-alumno.component';
import { DetailCursosComponent } from 'src/components/detail-cursos/detail-cursos.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegistroComponent } from '../../components/registro/registro.component';
import { InscripcionesComponent } from 'src/components/inscripciones/inscripciones.component';

//*- import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//*- MODULO DE DIALOG :
import { MatDialogModule } from '@angular/material/dialog';

//*- ANGULAR MATERIAL :
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

//*- TOOLTIP :
import { MatTooltipModule } from '@angular/material/tooltip';

//*- BOTONES ANGULAR MATERIAL :
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

//*- FORMULARIO ANGULAR MATERIAL :
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//*- TABLAS ANGULAR MATERIAL :
import { MatTableModule } from '@angular/material/table';

//*- PAGINACION ANGULAR MATERIAL :
import { MatPaginatorModule } from '@angular/material/paginator';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    PipeNombreApellidoPipe,
    TitleFontSizeDirective,
    DialogoComponent,
    DialogoCursosComponent,
    FooterComponent,
    SidenavComponent,
    AlumnosComponent,
    CursosComponent,
    DetailAlumnoComponent,
    DetailCursosComponent,
    LoginComponent,
    RegistroComponent,
    InscripcionesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    //*- Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-tipd5xxi4ahjugyl.us.auth0.com',
      clientId: 'LS4ndOYAyY7wjuStqT0gESrzNlAV9odJ',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    //*- ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    PipeNombreApellidoPipe,
    TitleFontSizeDirective,
    LoginComponent,
    MatNativeDateModule,
    RegistroComponent,
    DialogoComponent,
    DialogoCursosComponent,
    FooterComponent,
    SidenavComponent,
    AlumnosComponent,
    CursosComponent,
    DetailAlumnoComponent,
    DetailCursosComponent,
    InscripcionesComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
