import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IAdmin, IAlumnos, ICursos } from 'src/common/Interfaces';

export const EstadisticasActionsAlumnos = createActionGroup({
  source: 'Estadisticas',
  events: {
    LoadEstadisticassAlumnos: emptyProps(),
    loadEstadisticassSuccessAlumnos: props<{ data: IAlumnos[] }>(),
    loadEstadisticassFailureAlumnos: props<{ error: unknown }>(),
  },
});

export const EstadisticasActionsAdministradores = createActionGroup({
  source: 'Estadisticas',
  events: {
    LoadEstadisticassAdministradores: emptyProps(),
    loadEstadisticassSuccessAdministradores: props<{
      data: IAdmin[];
    }>(),
    loadEstadisticassFailureAdministradores: props<{ error: unknown }>(),
  },
});

export const EstadisticasActionsCursos = createActionGroup({
  source: 'Estadisticas',
  events: {
    LoadEstadisticassCursos: emptyProps(),
    loadEstadisticassSuccessCursos: props<{ data: ICursos[] }>(),
    loadEstadisticassFailureCursos: props<{ error: unknown }>(),
  },
});
