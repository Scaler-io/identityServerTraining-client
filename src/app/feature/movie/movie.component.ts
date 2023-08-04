import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { AppState } from 'src/app/store/app.state';
import * as moviesAction from '../../state/movie/movie.action';
import { movieList } from 'src/app/state/movie/movie.selector';
import * as moment from 'moment';

@Component({
  selector: 'ist-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new moviesAction.FetchMovieList());

    this.movies$ = this.store.select((state) => movieList(state));
  }

  public formatDate(date: string) {
    return moment(date).fromNow();
  }
}
