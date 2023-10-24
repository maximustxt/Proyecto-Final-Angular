import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//*- Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

//*- import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//*- MODULO DE DIALOG :
import { MatDialogModule } from '@angular/material/dialog';

//*- ALERTAS TOASTER :
import { ToastrModule } from 'ngx-toastr';

//*- MODULO DE RUTAS :
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//*- MODULO DE FORMULARIOS :
import { ReactiveFormsModule } from '@angular/forms';

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

//*- Components :
import { FooterComponent } from '../components/footer/footer.component';
import { AlumnosComponent } from '../components/alumnos/alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { PipeNombreApellidoPipe } from '../pipes/pipe-nombre-apellido.pipe';
import { TitleFontSizeDirective } from '../directives/title-font-size.directive';
import { DialogoComponent } from 'src/components/dialogo/dialogo.component';
import { DialogoCursosComponent } from 'src/components/dialogo-cursos/dialogo-cursos.component';
import { CursosComponent } from 'src/components/cursos/cursos.component';
import { DetailAlumnoComponent } from 'src/components/detail-alumno/detail-alumno.component';
import { DetailCursosComponent } from 'src/components/detail-cursos/detail-cursos.component';
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    AlumnosComponent,
    PipeNombreApellidoPipe,
    TitleFontSizeDirective,
    DialogoComponent,
    DialogoCursosComponent,
    CursosComponent,
    DetailAlumnoComponent,
    DetailCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    ToastrModule.forRoot(),
    //*- ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    //*- Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-tipd5xxi4ahjugyl.us.auth0.com',
      clientId: 'LS4ndOYAyY7wjuStqT0gESrzNlAV9odJ',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
