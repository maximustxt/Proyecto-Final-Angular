import { createFeature, createReducer, on } from '@ngrx/store';
import {
  EstadisticasActionsAdministradores,
  EstadisticasActionsCursos,
  EstadisticasActionsAlumnos,
} from './estadisticas.actions';
//* INTERFACES :
import { IAdmin, IAlumnos, ICursos } from 'src/common/Interfaces';

export const estadisticasFeatureKey = 'estadisticas';

export interface State {
  Alumnos: IAlumnos[];
  Administradores: IAdmin[];
  Cursos: ICursos[];
}

export const initialState: State = {
  Alumnos: [],
  Administradores: [],
  Cursos: [],
};

export const reducer = createReducer(
  initialState,

  //*------ CASOS DEL ALUMNO :

  on(EstadisticasActionsAlumnos.loadEstadisticassAlumnos, (state) => state),
  on(
    EstadisticasActionsAlumnos.loadEstadisticassSuccessAlumnos,
    (state, action) => {
      return { ...state, Alumnos: action.data };
    }
  ),
  on(
    EstadisticasActionsAlumnos.loadEstadisticassFailureAlumnos,
    (state) => state
  ),

  //*------ CASOS DEL ADMINISTRADOR:

  on(
    EstadisticasActionsAdministradores.loadEstadisticassAdministradores,
    (state) => state
  ),
  on(
    EstadisticasActionsAdministradores.loadEstadisticassSuccessAdministradores,
    (state, action) => {
      return { ...state, Administradores: action.data };
    }
  ),
  on(
    EstadisticasActionsAdministradores.loadEstadisticassFailureAdministradores,
    (state) => state
  ),

  //*------ CASOS DE LOS CURSOS :

  on(EstadisticasActionsCursos.loadEstadisticassCursos, (state) => state),
  on(
    EstadisticasActionsCursos.loadEstadisticassSuccessCursos,
    (state, action) => {
      return { ...state, Cursos: action.data };
    }
  ),
  on(EstadisticasActionsCursos.loadEstadisticassFailureCursos, (state) => state)
);

export const estadisticasFeature = createFeature({
  name: estadisticasFeatureKey,
  reducer,
});
