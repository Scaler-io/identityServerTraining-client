import {
  AUTH_STATE_NAME,
  AuthState,
  authReducer,
} from '../state/auth/auth.reducer';
import { MOVIE_STATE_NAME, MovieState } from '../state/movie/movie.reducer';

export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
  [MOVIE_STATE_NAME]: MovieState;
}

export const appReducer = {
  [AUTH_STATE_NAME]: authReducer,
};
