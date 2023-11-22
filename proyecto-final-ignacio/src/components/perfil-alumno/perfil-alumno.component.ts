import { Component } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
//* SERVICIO :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';
//* LOCAL STORAGE :
import ObtenerAlumno from '../LocalStorage/Alumnos/ObtenerAlumno';
//* STORE :
import { Store } from '@ngrx/store';
//* ACTIONS :
import { PerfilAlumnoActions } from './pages/store/perfil-alumno.actions';
//* SELECT PROFILE STUDIENT :
import { selectPerfilAlumno } from './pages/store/perfil-alumno.selectors';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss'],
})
export class PerfilAlumnoComponent {
  constructor(private store: Store) {}

  private ngUnsubscribe$ = new Subject<void>();

  Alumno!: IAlumnos;
  SuscriptionAlumno!: Subscription;

  ngOnInit(): void {
    this.store.dispatch(PerfilAlumnoActions.loadPerfilAlumnos());

    this.SuscriptionAlumno = this.store
      .select(selectPerfilAlumno)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((value: any) => {
        this.Alumno = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionAlumno.unsubscribe();
  }
}
