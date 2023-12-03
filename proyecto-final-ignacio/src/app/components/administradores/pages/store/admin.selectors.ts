import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmin from './admin.reducer';

export const selectAdminState = createFeatureSelector<fromAdmin.State>(
  fromAdmin.adminFeatureKey
);

export const selectorAdmin = createSelector(
  selectAdminState,
  (state) => state.Admin
);
