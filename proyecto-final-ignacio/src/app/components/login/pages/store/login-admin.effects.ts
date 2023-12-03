import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginAdminActions } from './login-admin.actions';
//*  SERVICES :
import { AdminService } from 'src/Services/Administrador/admin.service';

@Injectable()
export class LoginAdminEffects {
  loadLoginAdmins$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginAdminActions.loadLoginAdmins),
      concatMap((action) => {
        return this.servicioAdmin.LoginAdmin(action.data).pipe(
          map((EstadoDelAdministrador: any) =>
            LoginAdminActions.login({ EstadoDelAdministrador })
          ),
          catchError((error) =>
            of(LoginAdminActions.loadLoginAdminsFailure({ error }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private servicioAdmin: AdminService) {}
}
