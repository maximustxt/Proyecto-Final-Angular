import { createFeature, createReducer, on } from '@ngrx/store';
import { LoginAdminActions } from './login-admin.actions';

export const loginAdminFeatureKey = 'loginAdmin';

export interface State {
  authUser: string;
}

export const initialState: State = {
  authUser: '',
};

export const reducer = createReducer(
  initialState,
  on(LoginAdminActions.loadLoginAdmins, (state) => state),
  on(LoginAdminActions.login, (state, action) => {
    return { ...state, authUser: action.EstadoDelAdministrador };
  }),
  on(LoginAdminActions.logout, (state) => state)
);

export const loginAdminFeature = createFeature({
  name: loginAdminFeatureKey,
  reducer,
});
