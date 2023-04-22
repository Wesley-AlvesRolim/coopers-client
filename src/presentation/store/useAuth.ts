import { create } from 'zustand';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import {
  type CreateAccountRequest,
  type LoginRequest,
  type LoginResponse,
} from '@/domain/use-cases';
import { makeCreateAccount, makeLogin } from '@/main/factories';

interface AuthStore {
  userData: Partial<LoginResponse>;
  isAuthenticated: boolean;
  createAccount: (params: CreateAccountRequest) => Promise<void>;
  login: (params: LoginRequest) => Promise<void>;
  logout: () => void;
}

const fetchLogin = makeLogin();
const fetchAccountCreation = makeCreateAccount();

const getParsedUserData = (): LoginResponse | null => {
  if (typeof window !== 'undefined') {
    const userDataCookie = getCookie('coppers:user')?.toString();
    return typeof userDataCookie === 'string'
      ? JSON.parse(userDataCookie)
      : null;
  }
  return null;
};

const useAuth = create<AuthStore>((set) => ({
  userData: getParsedUserData() ?? {},
  isAuthenticated: getParsedUserData() !== null,

  login: async (params) => {
    const user = await fetchLogin.execute({ ...params });

    setCookie('coppers:user', user);
    set((store) => ({
      ...store,
      isAuthenticated: true,
      userData: { ...user },
    }));
  },

  createAccount: async (params) => {
    await fetchAccountCreation.execute({ ...params });
  },

  logout: () => {
    deleteCookie('coppers:user');
    set((store) => ({
      ...store,
      isAuthenticated: false,
      userData: {},
    }));
  },
}));

export default useAuth;
