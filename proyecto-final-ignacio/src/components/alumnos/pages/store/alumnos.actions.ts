import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const AlumnosActions = createActionGroup({
  source: 'Alumnos',
  events: {
    'Load Alumnoss': emptyProps(),
    'Load Alumnoss Success': props<{ data: IAlumnos[] }>(),
    'Load Alumnoss Failure': props<{ error: unknown }>(),
  },
});
