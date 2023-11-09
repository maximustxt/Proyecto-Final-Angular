import { ActionReducerMap } from '@ngrx/store';
import { FeatureName, reducer } from '../Reducer/Reducer';

//* ESTO SERIA LA CONFIGURACION DEL REDUX :
export const appReducer: ActionReducerMap<any> = {
  [FeatureName]: reducer,
};
//* Debemos definir el reducer.
//* Le pasamos el nombre de nuestro reducer o feature.
