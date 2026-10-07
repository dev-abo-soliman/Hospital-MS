export type UserRole = "admin" | "doctor" | "patient";

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  avaterUlr?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token: string;
}
        