import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect } from 'src/app/state/movie/movie.effect';
import { StoreModule } from '@ngrx/store';
import {
  MOVIE_STATE_NAME,
  movieReducer,
} from 'src/app/state/movie/movie.reducer';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    EffectsModule.forFeature([MovieEffect]),
    StoreModule.forFeature(MOVIE_STATE_NAME, movieReducer),
  ],
})
export class MovieModule {}
