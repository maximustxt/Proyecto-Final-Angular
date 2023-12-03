import { createFeature, createReducer, on } from '@ngrx/store';
import { CursosDetailActions } from './cursos-detail.actions';
import { ICursos } from 'src/common/Interfaces';

export const cursosDetailFeatureKey = 'cursosDetail';

export interface State {
  DetailCursos: ICursos;
}

export const initialState: State = {
  DetailCursos: {
    nombre: '',
    descripcion: '',
    profesor: '',
    area: '',
    vacantes: 0,
    fechaInicio: '',
    fechaFinal: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(CursosDetailActions.loadCursosDetails, (state) => state),
  on(CursosDetailActions.loadCursosDetailsSuccess, (state, action) => {
    return { ...state, DetailCursos: action.data };
  }),
  on(CursosDetailActions.loadCursosDetailsFailure, (state) => state)
);

export const cursosDetailFeature = createFeature({
  name: cursosDetailFeatureKey,
  reducer,
});
