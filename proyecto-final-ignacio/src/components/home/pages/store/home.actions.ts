import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACES COURSES :
import { ICursos } from 'src/common/Interfaces';

export const HomeActions = createActionGroup({
  source: 'Home',
  events: {
    'Load Homes': emptyProps(),
    'Load Homes Success': props<{ data: ICursos[] }>(),
    'Load Homes Failure': props<{ error: unknown }>(),
  },
});
