import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CursosDetailActions } from './cursos-detail.actions';
//* SERVICES :
import { CursosService } from 'src/Services/Cursos/cursos.service';

@Injectable()
export class CursosDetailEffects {
  loadCursosDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosDetailActions.loadCursosDetails),
      concatMap(({ id }) =>
        this.servicesCursos.getDetailCurso(id).pipe(
          map((data) => CursosDetailActions.loadCursosDetailsSuccess({ data })),
          catchError((error) =>
            of(CursosDetailActions.loadCursosDetailsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private servicesCursos: CursosService
  ) {}
}
