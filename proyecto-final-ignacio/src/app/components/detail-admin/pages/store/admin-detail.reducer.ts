import { createFeature, createReducer, on } from '@ngrx/store';
import { AdminDetailActions } from './admin-detail.actions';
import { IAdmin } from 'src/common/Interfaces';

export const adminDetailFeatureKey = 'adminDetail';

export interface State {
  DetailAdmin: IAdmin;
}

export const initialState: State = {
  DetailAdmin: { nombre: '', apellido: '', edad: 0, imagen: '', email: '' },
};

export const reducer = createReducer(
  initialState,
  on(AdminDetailActions.loadAdminDetails, (state) => state),
  on(AdminDetailActions.loadAdminDetailsSuccess, (state, action) => {
    return { ...state, DetailAdmin: action.data };
  }),
  on(AdminDetailActions.loadAdminDetailsFailure, (state) => {
    return {
      ...state,
      DetailAdmin: { nombre: '', apellido: '', edad: 0, imagen: '', email: '' },
    };
  })
);

export const adminDetailFeature = createFeature({
  name: adminDetailFeatureKey,
  reducer,
});
