import { Movie } from 'src/app/core/models/movie.model';
import { MovieActions } from './movie.action';
import * as movieActions from './movie.action';

export interface MovieState {
  movieList: Movie[];
  error: any;
}

export const initialState: MovieState = {
  movieList: [],
  error: null,
};

export const MOVIE_STATE_NAME = 'movieState';

export function movieReducer(state: MovieState, action: MovieActions) {
  switch (action.type) {
    case movieActions.FETCH_MOVIE_LIST:
      return {
        ...state,
        movieList: [],
        error: null,
      };
    case movieActions.FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
        error: null,
      };
    case movieActions.FETCH_MOVIE_LIST_ERROR:
      return {
        ...state,
        movieList: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
