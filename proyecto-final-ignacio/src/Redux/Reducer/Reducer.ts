import { createReducer, on } from '@ngrx/store';
//* INTERFACES :
import { inicialStateInterface } from 'src/common/Interfaces';
//* IMPORTAMOS LA ACCION :
import { conunterAxions } from '../Actions/Actions';

export const FeatureName = 'Render';

//* Estado inicial o global.
export const inicialState: inicialStateInterface = {
  authUser: '',
};

export const reducer = createReducer(
  inicialState,

  on(conunterAxions.login, (state, actions) => {
    return {
      ...state,
      authUser: actions.EstadoDelUsuario,
    };
  }),

  on(conunterAxions.logout, (state) => {
    return {
      ...state,
      authUser: '',
    };
  })
);

//* LOS ON SERIAN COMO LOS CASOS DEL SWITCH.
//*  El metodo on como primer parametro recibe una Actions que hemos creado.
//*  Como segundo parametro creamos un callback que nos da el estado y tambien podemos obtener el actions.
//*  En la actions obtenemos el valor que nosotros le enviamos con el dispatch al accion para luego llegar al reducer.
//*  Debemos hacer una copia del estado.
