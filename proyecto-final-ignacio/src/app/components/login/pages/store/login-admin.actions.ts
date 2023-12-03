import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LoginAdminActions = createActionGroup({
  source: 'LoginAdmin',
  events: {
    'Load LoginAdmins': props<{
      data: { nombre: string; email: string; password: string };
    }>(),
    Login: props<{ EstadoDelAdministrador: string }>(),
    'Load LoginAdmins Failure': props<{ error: unknown }>(),
    Logout: emptyProps(),
  },
});
