import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { AdminDetailActions } from './admin-detail.actions';
//* SERVICES :
import { AdminService } from 'src/Services/Administrador/admin.service';

@Injectable()
export class AdminDetailEffects {
  loadAdminDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminDetailActions.loadAdminDetails),
      concatMap((actions) =>
        this.serviceAdmins.getDetailAdministradores(actions.id).pipe(
          map((data: any) =>
            AdminDetailActions.loadAdminDetailsSuccess({ data })
          ),
          catchError((error) =>
            of(AdminDetailActions.loadAdminDetailsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private serviceAdmins: AdminService) {}
}
