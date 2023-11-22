import { createFeature, createReducer, on } from '@ngrx/store';
import { LoginAlumnosActions } from './login-alumnos.actions';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const loginAlumnosFeatureKey = 'loginAlumnos';

export interface State {
  AlumnoAuth: IAlumnos;
}

export const initialState: State = {
  AlumnoAuth: {
    nombre: '',
    apellido: '',
    cursos: [],
    edad: 0,
    imagen: '',
    cursando: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(LoginAlumnosActions.loadLoginAlumnoss, (state) => state),
  on(LoginAlumnosActions.loadLoginAlumnossSuccess, (state, action) => {
    return { ...state, AlumnoAuth: action.data };
  }),
  on(LoginAlumnosActions.logout, (state: any) => {
    return {
      ...state,
      AlumnoAuth: {
        nombre: '',
        apellido: '',
        cursos: [],
        edad: 0,
        imagen: '',
        cursando: '',
      },
    };
  }),
  on(LoginAlumnosActions.loadLoginAlumnossFailure, (state) => state)
);

export const loginAlumnosFeature = createFeature({
  name: loginAlumnosFeatureKey,
  reducer,
});
