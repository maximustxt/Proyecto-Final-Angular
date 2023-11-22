import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursosDetail from './cursos-detail.reducer';

export const selectCursosDetailState =
  createFeatureSelector<fromCursosDetail.State>(
    fromCursosDetail.cursosDetailFeatureKey
  );

export const selectCursosDetail = createSelector(
  selectCursosDetailState,
  (state) => state.DetailCursos
);
