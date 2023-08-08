import { AuthConfig, User } from 'src/app/core/models/auth.model';
import { AuthActions } from './auth.action';
import * as authAction from './auth.action';

export interface AuthState {
  user: User;
  config: AuthConfig;
}

export const AUTH_STATE_NAME = 'authState';

export function authReducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case authAction.AUTHORIZATION_SUCCESS:
      return {
        ...state,
        user: {
          firstName: action.payload.userData.given_name,
          lastName: action.payload.userData.family_name,
          isLoggedIn: action.payload.isAuthenticated,
          role: action.payload.userData.role,
        },
        config: {
          accessToken: action.payload.accessToken,
          idToken: action.payload.idToken,
          configId: action.payload.configId,
        },
      };
    default:
      return state;
  }
}
