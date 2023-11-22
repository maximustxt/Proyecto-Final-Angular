import { createFeature, createReducer, on } from '@ngrx/store';
import { HomeActions } from './home.actions';
//* INTERFACE :
import { ICursos } from 'src/common/Interfaces';

export const homeFeatureKey = 'home';

export interface State {
  Cursos: ICursos[];
}

export const initialState: State = {
  Cursos: [],
};

export const reducer = createReducer(
  initialState,
  on(HomeActions.loadHomes, (state) => state),
  on(HomeActions.loadHomesSuccess, (state, action) => {
    return { ...state, Cursos: action.data };
  }),
  on(HomeActions.loadHomesFailure, (state) => {
    return { ...state, Cursos: [] };
  })
);

export const homeFeature = createFeature({
  name: homeFeatureKey,
  reducer,
});
