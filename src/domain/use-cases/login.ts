interface UsernameType {
  username: string;
}

export interface LoginRequest extends UsernameType {
  password: string;
}

export interface LoginResponse extends UsernameType {
  id: number;
}

export interface Login {
  execute: (params: LoginRequest) => Promise<LoginResponse>;
}
