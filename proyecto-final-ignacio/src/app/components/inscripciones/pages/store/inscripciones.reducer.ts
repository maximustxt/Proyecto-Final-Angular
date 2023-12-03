import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  Alumnos: IAlumnos[];
}

export const initialState: State = {
  Alumnos: [],
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripcioness, (state) => state),
  on(InscripcionesActions.loadInscripcionessSuccess, (state, action) => {
    return { ...state, Alumnos: action.data };
  }),
  on(InscripcionesActions.loadInscripcionessFailure, (state) => {
    return { ...state, Alumnos: [] };
  })
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});
