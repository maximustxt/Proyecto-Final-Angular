import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
//* ACTIONS :
import { AlumnoDetailActions } from './alumno-detail.actions';
//* SERVICES :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';

@Injectable()
export class AlumnoDetailEffects {
  loadAlumnoDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnoDetailActions.loadAlumnoDetails),
      concatMap(({ id }) =>
        this.servicesAlumnos.getDetailAlumno(id).pipe(
          map((data) => AlumnoDetailActions.loadAlumnoDetailsSuccess({ data })),
          catchError((error) =>
            of(AlumnoDetailActions.loadAlumnoDetailsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private servicesAlumnos: AlumnosService
  ) {}
}
