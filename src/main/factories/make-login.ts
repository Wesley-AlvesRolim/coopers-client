import { FetchAdapter } from '@/data/adapters';
import { RemoteLogin } from '@/data/use-cases';

export const makeLogin = (): RemoteLogin => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login/`;
  const fetchAdapter = new FetchAdapter();
  const login = new RemoteLogin(url, fetchAdapter);
  return login;
};
