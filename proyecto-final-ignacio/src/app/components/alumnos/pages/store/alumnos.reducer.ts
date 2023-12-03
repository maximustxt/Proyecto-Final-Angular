import { createFeature, createReducer, on } from '@ngrx/store';
import { AlumnosActions } from './alumnos.actions';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const alumnosFeatureKey = 'alumnos';

export interface State {
  Estudiantes: IAlumnos[];
}

export const initialState: State = {
  Estudiantes: [],
};

export const reducer = createReducer(
  initialState,
  on(AlumnosActions.loadAlumnoss, (state) => state),
  on(AlumnosActions.loadAlumnossSuccess, (state, action) => {
    return { ...state, Estudiantes: action.data };
  }),
  on(AlumnosActions.loadAlumnossFailure, (state) => {
    return { ...state, Estudiantes: [] };
  })
);

export const alumnosFeature = createFeature({
  name: alumnosFeatureKey,
  reducer,
});
