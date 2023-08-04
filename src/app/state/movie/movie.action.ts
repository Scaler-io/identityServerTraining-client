import { Action } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movie.model';

export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';
export const FETCH_MOVIE_LIST_SUCCESS = 'FETCH_MOVIE_LIST_SUCCESS';
export const FETCH_MOVIE_LIST_ERROR = 'FETCH_MOVIE_LIST_ERROR';

export class FetchMovieList implements Action {
  readonly type: string = FETCH_MOVIE_LIST;
  constructor(public payload?: any) {}
}

export class FetchMovieListSuccess implements Action {
  readonly type: string = FETCH_MOVIE_LIST_SUCCESS;
  constructor(public payload: Movie[]) {}
}

export class FetchMovieListError implements Action {
  readonly type: string = FETCH_MOVIE_LIST_ERROR;
  constructor(public payload?: any) {}
}

export type MovieActions =
  | FetchMovieList
  | FetchMovieListSuccess
  | FetchMovieListError;
