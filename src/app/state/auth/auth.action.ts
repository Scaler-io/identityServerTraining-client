import { Action } from '@ngrx/store';
import { LoginResponse } from 'angular-auth-oidc-client';

export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';

export class AuthorizationSuccess implements Action {
  constructor(public payload: LoginResponse) {}
  type: string = AUTHORIZATION_SUCCESS;
}
export type AuthActions = AuthorizationSuccess;
