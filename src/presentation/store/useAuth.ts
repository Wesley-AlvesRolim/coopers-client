import { create } from 'zustand';
import { type LoginRequest, type LoginResponse } from '@/domain/use-cases';
import { makeLogin } from '@/main/factories';

interface AuthStore {
  userData: LoginResponse;
  login: (params: LoginRequest) => Promise<void>;
}

const fetchLogin = makeLogin();

const useAuth = create<AuthStore>((set) => ({
  userData: {} as any as LoginResponse,

  login: async (params) => {
    const user = await fetchLogin.execute({ ...params });

    localStorage.setItem('coppers:user', JSON.stringify(user));
    set((store) => ({
      ...store,
      userData: { ...user },
    }));
  },
}));

export default useAuth;
