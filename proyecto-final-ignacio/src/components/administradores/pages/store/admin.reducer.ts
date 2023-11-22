import { createFeature, createReducer, on } from '@ngrx/store';
import { AdminActions } from './admin.actions';
import { IAdmin } from 'src/common/Interfaces';

export const adminFeatureKey = 'admin';

export interface State {
  Admin: IAdmin[];
}

export const initialState: State = {
  Admin: [],
};

export const reducer = createReducer(
  initialState,
  on(AdminActions.loadAdmins, (state) => state),
  on(AdminActions.loadAdminsSuccess, (state, actions) => {
    return { ...state, Admin: actions.data };
  }),
  on(AdminActions.loadAdminsFailure, (state) => {
    return { ...state, Admin: [] };
  })
);

export const adminFeature = createFeature({
  name: adminFeatureKey,
  reducer,
});
