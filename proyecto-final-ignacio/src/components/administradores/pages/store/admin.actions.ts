import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACE :
import { IAdmin } from 'src/common/Interfaces';

export const AdminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Load Admins': emptyProps(),
    'Load Admins Success': props<{ data: IAdmin[] }>(),
    'Load Admins Failure': props<{ error: unknown }>(),
  },
});
