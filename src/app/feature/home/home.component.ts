import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { isAuthenticated, getUserClaims } from 'src/app/state/auth/auth.selector';
import { AppState } from 'src/app/store/app.state';
import * as authActions from '../../state/auth/auth.action';

@Component({
  selector: 'ist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public title = 'ist-client';
  public isLoggedIn$;
  public user$;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private movieService: MovieService
  ) {}

  private subscriptions = {
    checkAuth: null,
  };

  ngOnInit(): void {
    this.authService.checkAuth().subscribe((response) => {
      if (response.isAuthenticated) {
        this.store.dispatch(new authActions.AuthorizationSuccess(response));
      }
    });

    this.isLoggedIn$ = this.store.select((state) => isAuthenticated(state));
    this.user$ = this.store.select((state) => getUserClaims(state));
  }

  ngOnDestroy(): void {
    if (this.subscriptions.checkAuth) {
      this.subscriptions.checkAuth.unsubscribe();
    }
  }

  public signIn() {
    this.authService.login();
  }

  public onLogout() {
    this.authService.logout();
  }

  public getMovies() {
    this.movieService.getAllMovies().subscribe();
  }
}
