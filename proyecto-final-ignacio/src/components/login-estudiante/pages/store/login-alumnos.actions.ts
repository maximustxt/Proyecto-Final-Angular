import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACE :
import { IAlumnos } from 'src/common/Interfaces';

export const LoginAlumnosActions = createActionGroup({
  source: 'LoginAlumnos',
  events: {
    'Load LoginAlumnoss': props<{ nombre: string }>(),
    'Load LoginAlumnoss Success': props<{ data: IAlumnos }>(),
    'Load LoginAlumnoss Failure': emptyProps(),
    Logout: emptyProps(),
  },
});
