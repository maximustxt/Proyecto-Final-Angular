import { createFeature, createReducer, on } from '@ngrx/store';
import { CursosActions } from './cursos.actions';
//* INTERFACES :
import { ICursos } from 'src/common/Interfaces';

export const cursosFeatureKey = 'cursos';

export interface State {
  Cursos: ICursos[];
}

export const initialState: State = {
  Cursos: [],
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.loadCursoss, (state) => state),
  on(CursosActions.loadCursossSuccess, (state, action) => {
    return { ...state, Cursos: action.data };
  }),
  on(CursosActions.loadCursossFailure, (state) => {
    return { ...state, Cursos: [] };
  })
);

export const cursosFeature = createFeature({
  name: cursosFeatureKey,
  reducer,
});
