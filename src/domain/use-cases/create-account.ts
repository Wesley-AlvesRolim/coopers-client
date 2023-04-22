export interface CreateAccountRequest {
  username: string;
  password: string;
}

export interface CreateAccount {
  execute: (params: CreateAccountRequest) => Promise<void>;
}
