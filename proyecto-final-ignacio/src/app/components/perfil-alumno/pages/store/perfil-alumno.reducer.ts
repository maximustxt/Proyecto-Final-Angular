import { createFeature, createReducer, on } from '@ngrx/store';
import { PerfilAlumnoActions } from './perfil-alumno.actions';
//* ALUMNOS :
import { IAlumnos } from 'src/common/Interfaces';

export const perfilAlumnoFeatureKey = 'perfilAlumno';

export interface State {
  Alumno: IAlumnos;
}

export const initialState: State = {
  Alumno: {
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
  on(PerfilAlumnoActions.loadPerfilAlumnos, (state) => {
    return state;
  }),
  on(PerfilAlumnoActions.loadPerfilAlumnosSuccess, (state, action) => {
    return { ...state, Alumno: action.data };
  }),
  on(PerfilAlumnoActions.loadPerfilAlumnosFailure, (state: any) => {
    return { ...state, Alumno: {} };
  })
);

export const perfilAlumnoFeature = createFeature({
  name: perfilAlumnoFeatureKey,
  reducer,
});
