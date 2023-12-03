import { createFeature, createReducer, on } from '@ngrx/store';
import { AlumnoDetailActions } from './alumno-detail.actions';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const alumnoDetailFeatureKey = 'alumnoDetail';

export interface State {
  DetailAlumno: IAlumnos;
}

export const initialState: State = {
  DetailAlumno: {
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
  on(AlumnoDetailActions.loadAlumnoDetails, (state) => state),
  on(AlumnoDetailActions.loadAlumnoDetailsSuccess, (state, action) => {
    return { ...state, DetailAlumno: action.data };
  }),
  on(AlumnoDetailActions.loadAlumnoDetailsFailure, (state) => {
    return state;
  })
);

export const alumnoDetailFeature = createFeature({
  name: alumnoDetailFeatureKey,
  reducer,
});
