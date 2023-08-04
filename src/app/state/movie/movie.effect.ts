import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie.service';
import * as movieActions from './movie.action';
import { Movie } from 'src/app/core/models/movie.model';

@Injectable()
export class MovieEffect {
  public fetchMovieList$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieActions.FETCH_MOVIE_LIST),
      switchMap((action: movieActions.FetchMovieList) => {
        return this.movieService.getAllMovies().pipe(
          map((response: Movie[]) => {
            return new movieActions.FetchMovieListSuccess(response);
          }),
          catchError((e) => {
            console.log(e);
            return of(new movieActions.FetchMovieListError(e));
          })
        );
      })
    );
  });

  constructor(private movieService: MovieService, private actions$: Actions) {}
}
