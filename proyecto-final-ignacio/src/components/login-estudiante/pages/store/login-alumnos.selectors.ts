import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginAlumnos from './login-alumnos.reducer';

export const selectLoginAlumnosState =
  createFeatureSelector<fromLoginAlumnos.State>(
    fromLoginAlumnos.loginAlumnosFeatureKey
  );

export const selectLoginAlumno = createSelector(
  selectLoginAlumnosState,
  (state) => state.AlumnoAuth
);
