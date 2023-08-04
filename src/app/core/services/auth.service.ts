import { Injectable } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  public checkAuth(): Observable<LoginResponse> {
    return this.oidcSecurityService.checkAuth();
  }

  public login(configId?, authOptions?) {
    this.oidcSecurityService.authorize(configId, authOptions);
  }

  public logout() {
    this.oidcSecurityService.logoff().subscribe((result) => {
      console.log(result);
    });
  }

  public getToken() {
    return this.oidcSecurityService.getAccessToken();
  }
}
