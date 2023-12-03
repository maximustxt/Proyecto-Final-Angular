import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnoDetail from './alumno-detail.reducer';

export const selectAlumnoDetailState =
  createFeatureSelector<fromAlumnoDetail.State>(
    fromAlumnoDetail.alumnoDetailFeatureKey
  );

export const selectAlumnoDetail = createSelector(
  selectAlumnoDetailState,
  (state) => state.DetailAlumno
);
