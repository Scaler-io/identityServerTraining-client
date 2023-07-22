import { LogLevel } from 'angular-auth-oidc-client';

export interface IConfig {
  prod: boolean;
  oidcconfig: OidcConfig;
}

export interface OidcConfig {
  authority: string;
  redirectUrl: string;
  postLogoutRedirectUri: string;
  clientId: string;
  scope: string;
  responseType: string;
  silentRenew: boolean;
  useRefreshToken: boolean;
  logLevel: LogLevel;
}
