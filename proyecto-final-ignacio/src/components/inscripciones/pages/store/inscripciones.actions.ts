import { createActionGroup, emptyProps, props } from '@ngrx/store';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripcioness': emptyProps(),
    'Load Inscripcioness Success': props<{ data: IAlumnos[] }>(),
    'Load Inscripcioness Failure': props<{ error: unknown }>(),
  },
});
