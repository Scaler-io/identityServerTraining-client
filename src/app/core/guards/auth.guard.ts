import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { isAuthenticated } from 'src/app/state/auth/auth.selector';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const authService = inject(AuthService);
  const router = inject(Router);

  let isLoggedIn: boolean = false;

  store
    .select((state) => isAuthenticated(state))
    .subscribe((response) => (isLoggedIn = response));

  if (isLoggedIn) {
    return true;
  }

  authService.login();

  return false;
};
