import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const conunterAxions = createActionGroup({
  source: 'authUser', // nombre de nuestra accion.
  events: {
    Login: props<{ EstadoDelUsuario: string }>(), // El metodo Props nos permite enviar data desde el dispatch.
    Logout: emptyProps(),
  },
});

//* emptyProps(), ===> El metodo EmptyProps ==> sirve en caso de no enviar ninguna props al dispatch.
