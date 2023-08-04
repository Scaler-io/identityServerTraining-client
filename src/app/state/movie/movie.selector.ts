import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOVIE_STATE_NAME, MovieState } from './movie.reducer';

const movieState = createFeatureSelector<MovieState>(MOVIE_STATE_NAME);

export const movieList = createSelector(movieState, (state: MovieState) => {
  return state?.movieList;
});
