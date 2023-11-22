import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//*- MODULO DE RUTAS :
import { AppRoutingModule } from '../app/app-routing.module';

//*- ALERTAS TOASTER :
import { HotToastModule } from '@ngneat/hot-toast';

//*- ANIMACION DE ANGULAR MATERIAL :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//*- MODULO DE CALENDARIO :
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//*- MODULO DE FORMULARIOS :
import { ReactiveFormsModule } from '@angular/forms';

//*- PIPES :
import { PipeNombreApellidoPipe } from '../pipes/pipe-nombre-apellido.pipe';

//*- DIRECTIVAS :
import { TitleFontSizeDirective } from '../directives/title-font-size.directive';

//*- Components :
import { FooterComponent } from '../components/footer/footer.component';
import { AlumnosComponent } from '../components/alumnos/alumnos.component';
import { SidenavComponent } from 'src/components/sidenav/sidenav.component';
import { DialogoComponent } from 'src/components/dialogo/dialogo.component';
import { DialogoCursosComponent } from 'src/components/dialogo-cursos/dialogo-cursos.component';
import { CursosComponent } from 'src/components/cursos/cursos.component';
import { DetailAlumnoComponent } from 'src/components/detail-alumno/detail-alumno.component';
import { DetailCursosComponent } from 'src/components/detail-cursos/detail-cursos.component';
import { LoginComponent } from '../components/login/login.component';
import { InscripcionesComponent } from 'src/components/inscripciones/inscripciones.component';
import { AdministradoresComponent } from 'src/components/administradores/administradores.component';
import { DetailAdminComponent } from 'src/components/detail-admin/detail-admin.component';
import { DialogoAdministradoresComponent } from 'src/components/dialogo-administradores/dialogo-administradores.component';
import { LoginEstudianteComponent } from 'src/components/login-estudiante/login-estudiante.component';
import { PerfilAlumnoComponent } from 'src/components/perfil-alumno/perfil-alumno.component';
import { HomeComponent } from 'src/components/home/home.component';
import { CursosDeAlumnosComponent } from 'src/components/cursos-de-alumnos/cursos-de-alumnos.component';
import { DialogoInscripcionesComponent } from 'src/components/dialogo-inscripciones/dialogo-create/dialogo-Create-inscripciones.component';
import { DialogoDeleteComponent } from 'src/components/dialogo-inscripciones/dialogo-delete/dialogo-delete.component';
import { DialogoEditComponent } from 'src/components/dialogo-inscripciones/dialogo-edit/dialogo-edit.component';
import { EstadisticasComponent } from 'src/components/estadisticas/estadisticas.component';

//*- import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//*- CARD :
import { MatCardModule } from '@angular/material/card';

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

//* MODULO DE ESTADISTICAS :
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

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
    CursosDeAlumnosComponent,
    FooterComponent,
    SidenavComponent,
    AlumnosComponent,
    CursosComponent,
    HomeComponent,
    DetailAlumnoComponent,
    DetailCursosComponent,
    LoginComponent,
    InscripcionesComponent,
    AdministradoresComponent,
    DetailAdminComponent,
    DialogoAdministradoresComponent,
    LoginEstudianteComponent,
    PerfilAlumnoComponent,
    DialogoInscripcionesComponent,
    DialogoDeleteComponent,
    DialogoEditComponent,
    EstadisticasComponent,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgChartsModule,
    HotToastModule.forRoot(),
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
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
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
    NgChartsModule,
    PipeNombreApellidoPipe,
    TitleFontSizeDirective,
    LoginComponent,
    MatNativeDateModule,
    DialogoComponent,
    DialogoCursosComponent,
    FooterComponent,
    SidenavComponent,
    AlumnosComponent,
    CursosComponent,
    EstadisticasComponent,
    PerfilAlumnoComponent,
    DetailAlumnoComponent,
    DetailCursosComponent,
    InscripcionesComponent,
    AdministradoresComponent,
    DialogoDeleteComponent,
    DialogoEditComponent,
    DialogoInscripcionesComponent,
    HomeComponent,
    DialogoAdministradoresComponent,
    CursosDeAlumnosComponent,
    LoginEstudianteComponent,
    DetailAdminComponent,
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
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
