import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdminDetail from './admin-detail.reducer';

export const selectAdminDetailState =
  createFeatureSelector<fromAdminDetail.State>(
    fromAdminDetail.adminDetailFeatureKey
  );

export const selectDetailAdmin = createSelector(
  selectAdminDetailState,
  (state) => state.DetailAdmin
);
