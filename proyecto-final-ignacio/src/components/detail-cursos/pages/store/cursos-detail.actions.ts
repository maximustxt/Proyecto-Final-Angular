import { createActionGroup, props } from '@ngrx/store';
//* INTERFACES :
import { ICursos } from 'src/common/Interfaces';

export const CursosDetailActions = createActionGroup({
  source: 'CursosDetail',
  events: {
    'Load CursosDetails': props<{ id: string }>(),
    'Load CursosDetails Success': props<{ data: ICursos }>(),
    'Load CursosDetails Failure': props<{ error: unknown }>(),
  },
});
