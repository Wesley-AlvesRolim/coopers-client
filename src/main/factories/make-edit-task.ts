import { FetchAdapter } from '@/data/adapters';
import { RemoteEditTask } from '@/data/use-cases';

export const makeEditTask = (): RemoteEditTask => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/task`;
  const fetchAdapter = new FetchAdapter();
  const remoteEditTask = new RemoteEditTask(url, fetchAdapter);
  return remoteEditTask;
};
