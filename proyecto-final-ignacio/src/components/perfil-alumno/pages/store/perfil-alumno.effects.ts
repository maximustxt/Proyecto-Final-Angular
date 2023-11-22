import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PerfilAlumnoActions } from './perfil-alumno.actions';
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
//* LOCAL STORAGE :
import ObtenerAlumno from 'src/components/LocalStorage/Alumnos/ObtenerAlumno';

@Injectable()
export class PerfilAlumnoEffects {
  loadPerfilAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PerfilAlumnoActions.loadPerfilAlumnos),
      concatMap(() => {
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        return this.servicesAlumnos.getDetailAlumno(ObtenerAlumno()._id).pipe(
          map((data) => PerfilAlumnoActions.loadPerfilAlumnosSuccess({ data })),
          catchError((error) =>
            of(PerfilAlumnoActions.loadPerfilAlumnosFailure({ error }))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private servicesAlumnos: AlumnosService
  ) {}
}
