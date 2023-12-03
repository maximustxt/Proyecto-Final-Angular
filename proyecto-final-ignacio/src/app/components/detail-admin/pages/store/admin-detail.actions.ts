import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACES :
import { IAdmin } from 'src/common/Interfaces';

export const AdminDetailActions = createActionGroup({
  source: 'AdminDetail',
  events: {
    'Load AdminDetails': props<{ id: string }>(),
    'Load AdminDetails Success': props<{ data: IAdmin }>(),
    'Load AdminDetails Failure': props<{ error: unknown }>(),
  },
});
