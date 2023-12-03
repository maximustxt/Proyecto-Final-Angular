import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPerfilAlumno from './perfil-alumno.reducer';

export const selectPerfilAlumnoState =
  createFeatureSelector<fromPerfilAlumno.State>(
    fromPerfilAlumno.perfilAlumnoFeatureKey
  );

export const selectPerfilAlumno = createSelector(
  selectPerfilAlumnoState,
  (state) => state.Alumno
);
