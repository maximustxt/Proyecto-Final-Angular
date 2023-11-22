import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEstadisticas from './estadisticas.reducer';

export const selectEstadisticasState =
  createFeatureSelector<fromEstadisticas.State>(
    fromEstadisticas.estadisticasFeatureKey
  );

export const selectEstadisticasAlumnos = createSelector(
  selectEstadisticasState,
  (state) => state.Alumnos
);

export const selectEstadisticasCursos = createSelector(
  selectEstadisticasState,
  (state) => state.Cursos
);

export const selectEstadisticasAdministradores = createSelector(
  selectEstadisticasState,
  (state) => state.Administradores
);
