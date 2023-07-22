import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_STATE_NAME, AuthState } from './auth.reducer';

const authState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(authState, (state: AuthState) => {
  return state?.user.isLoggedIn;
});

export const getUserClaims = createSelector(authState, (state: AuthState) => {
  return state?.user;
});
