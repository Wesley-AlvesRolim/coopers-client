import { FetchAdapter } from '@/data/adapters';
import { RemoteCreateAccount } from '@/data/use-cases';

export const makeCreateAccount = (): RemoteCreateAccount => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register/`;
  const fetchAdapter = new FetchAdapter();
  const createAccount = new RemoteCreateAccount(url, fetchAdapter);
  return createAccount;
};
