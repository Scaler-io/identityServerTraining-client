export interface User {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface AuthConfig {
  accessToken: string;
  configId: string;
  idToken: string;
}

export enum UserRole {
  Admin = 'Admin',
  Visitor = 'Visitor',
}
