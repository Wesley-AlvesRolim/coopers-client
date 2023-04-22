import { FetchAdapter } from '@/data/adapters';
import { RemoteReadTasks } from '@/data/use-cases';

export const makeReadTasks = (): RemoteReadTasks => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/task`;
  const fetchAdapter = new FetchAdapter();
  const remoteReadTasks = new RemoteReadTasks(url, fetchAdapter);
  return remoteReadTasks;
};
