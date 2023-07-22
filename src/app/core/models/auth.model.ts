export interface User {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
}

export interface AuthConfig {
  accessToken: string;
  configId: string;
  idToken: string;
}
