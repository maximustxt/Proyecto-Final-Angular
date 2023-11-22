import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
//* SERVICES :
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
//* ACTIONS ALUMNOS :
import { LoginAlumnosActions } from './login-alumnos.actions';

@Injectable()
export class LoginAlumnosEffects {
  loadLoginAlumnoss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginAlumnosActions.loadLoginAlumnoss),
      concatMap((actions) => {
        return this.ServicioAlumnos.LoginAlumno(actions.nombre).pipe(
          map((data) => LoginAlumnosActions.loadLoginAlumnossSuccess({ data })),
          catchError((error) =>
            of(LoginAlumnosActions.loadLoginAlumnossFailure())
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private ServicioAlumnos: AlumnosService
  ) {}
}
