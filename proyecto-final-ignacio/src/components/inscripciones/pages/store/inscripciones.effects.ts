import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
//* SERVICES :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';

@Injectable()
export class InscripcionesEffects {
  loadInscripcioness$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.loadInscripcioness),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ServicesAlumnos.getAlumnos().pipe(
          map((data) =>
            InscripcionesActions.loadInscripcionessSuccess({ data })
          ),
          catchError((error) =>
            of(InscripcionesActions.loadInscripcionessFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ServicesAlumnos: AlumnosService
  ) {}
}
