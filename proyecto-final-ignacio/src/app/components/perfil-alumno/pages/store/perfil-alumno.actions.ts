import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const PerfilAlumnoActions = createActionGroup({
  source: 'PerfilAlumno',
  events: {
    'Load PerfilAlumnos': emptyProps(),
    'Load PerfilAlumnos Success': props<{ data: IAlumnos }>(),
    'Load PerfilAlumnos Failure': props<{ error: unknown }>(),
  },
});
