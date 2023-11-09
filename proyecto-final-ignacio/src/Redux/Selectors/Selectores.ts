//* LOS SELECTORES NOS PERMITEN OBTENER LOS DATOS DEL ESTADO GLOBAL :
import { createFeatureSelector, createSelector } from '@ngrx/store';
//* REDUCER :
import { FeatureName } from '../Reducer/Reducer';
//* INTERFACES :
import { inicialStateInterface } from 'src/common/Interfaces';

// Le debo pasar por parametro el reducer donde voy a estar modificando los estados.
// Aca nos devolveria todo el estado completo.
// Es de tipo InicialState.
export const selectorState =
  createFeatureSelector<inicialStateInterface>(FeatureName);

// Creamos un selector para obtener una sola propiedad del estado.
export const SelectAuthUser = createSelector(
  selectorState,
  (state) => state.authUser
);
