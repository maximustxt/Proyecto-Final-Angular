import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IAlumnos } from 'src/common/Interfaces';

export const AlumnoDetailActions = createActionGroup({
  source: 'AlumnoDetail',
  events: {
    'Load AlumnoDetails': props<{ id: string }>(),
    'Load AlumnoDetails Success': props<{ data: IAlumnos }>(),
    'Load AlumnoDetails Failure': props<{ error: unknown }>(),
  },
});
