import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginAdmin from './login-admin.reducer';

export const selectLoginAdminState =
  createFeatureSelector<fromLoginAdmin.State>(
    fromLoginAdmin.loginAdminFeatureKey
  );

export const selectLoginAdmin = createSelector(selectLoginAdminState, (state) =>
  state ? state.authUser : null
);
