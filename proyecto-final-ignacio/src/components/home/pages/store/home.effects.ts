import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { HomeActions } from './home.actions';
//* SERVICES COURSES :
import { CursosService } from 'src/Services/Cursos/cursos.service';

@Injectable()
export class HomeEffects {
  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.loadHomes),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ServicioCursos.getCursos().pipe(
          map((data) => HomeActions.loadHomesSuccess({ data })),
          catchError((error) => of(HomeActions.loadHomesFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ServicioCursos: CursosService
  ) {}
}
