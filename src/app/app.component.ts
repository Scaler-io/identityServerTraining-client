import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as authAction from './state/auth/auth.action';
import { getUserClaims } from './state/auth/auth.selector';

@Component({
  selector: 'ist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'ist-client';
  public token$;
  public user$;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  private subscriptions = {
    checkAuth: null,
  };

  ngOnInit(): void {
    this.subscriptions.checkAuth = this.authService
      .checkAuth()
      .subscribe((response) => {
        if (!response.isAuthenticated) {
          this.authService.login();
        } else {
          this.token$ = this.authService.getToken();
          this.store.dispatch(new authAction.AuthorizationSuccess(response));
          console.table(response);
        }
      });

    this.user$ = this.store.select((state) => getUserClaims(state));
  }

  ngOnDestroy(): void {
    if (this.subscriptions.checkAuth) {
      this.subscriptions.checkAuth.unsubscribe();
    }
  }

  public onLogout() {
    this.authService.logout();
  }
}
