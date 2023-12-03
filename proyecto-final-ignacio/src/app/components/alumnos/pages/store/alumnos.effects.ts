import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AlumnosActions } from './alumnos.actions';
//* SERVICES :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';

@Injectable()
export class AlumnosEffects {
  loadAlumnoss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.loadAlumnoss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ServiceAlumno.getAlumnos().pipe(
          map((data) => AlumnosActions.loadAlumnossSuccess({ data })),
          catchError((error) =>
            of(AlumnosActions.loadAlumnossFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ServiceAlumno: AlumnosService
  ) {}
}
