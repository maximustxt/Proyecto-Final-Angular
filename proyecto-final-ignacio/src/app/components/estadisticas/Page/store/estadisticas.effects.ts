import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  EstadisticasActionsAdministradores,
  EstadisticasActionsAlumnos,
  EstadisticasActionsCursos,
} from './estadisticas.actions';
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
import { CursosService } from 'src/Services/Cursos/cursos.service';
import { AdminService } from 'src/Services/Administrador/admin.service';

//* EFFECT DE ALUMNOS :

@Injectable()
export class EstadisticasEffectsAlumnos {
  loadEstadisticass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EstadisticasActionsAlumnos.loadEstadisticassAlumnos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ServiciosAlumno.getAlumnos().pipe(
          map((data) =>
            EstadisticasActionsAlumnos.loadEstadisticassSuccessAlumnos({ data })
          ),
          catchError((error) =>
            of(
              EstadisticasActionsAlumnos.loadEstadisticassFailureAlumnos({
                error,
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ServiciosAlumno: AlumnosService
  ) {}
}

//* EFFECT DE ADMINISTRADORES :

@Injectable()
export class EstadisticasEffectsAdministradores {
  loadEstadisticass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        EstadisticasActionsAdministradores.loadEstadisticassAdministradores
      ),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ServiciosAdmin.getAdministradores().pipe(
          map((data) =>
            EstadisticasActionsAdministradores.loadEstadisticassSuccessAdministradores(
              {
                data,
              }
            )
          ),
          catchError((error) =>
            of(
              EstadisticasActionsAdministradores.loadEstadisticassFailureAdministradores(
                {
                  error,
                }
              )
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ServiciosAdmin: AdminService
  ) {}
}

//* EFFECT DE CURSOS :

@Injectable()
export class EstadisticasEffectsCursos {
  loadEstadisticass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EstadisticasActionsCursos.loadEstadisticassCursos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ServiciosCursos.getCursos().pipe(
          map((data) =>
            EstadisticasActionsCursos.loadEstadisticassSuccessCursos({ data })
          ),
          catchError((error) =>
            of(
              EstadisticasActionsCursos.loadEstadisticassFailureCursos({
                error,
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ServiciosCursos: CursosService
  ) {}
}
