import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACES :
import { ICursos } from 'src/common/Interfaces';

export const CursosActions = createActionGroup({
  source: 'Cursos',
  events: {
    'Load Cursoss': emptyProps(),
    'Load Cursoss Success': props<{ data: ICursos[] }>(),
    'Load Cursoss Failure': props<{ error: unknown }>(),
  },
});
