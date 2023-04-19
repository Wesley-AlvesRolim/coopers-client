import { FetchAdapter } from '@/data/adapters';
import { RemoteDeleteTask } from '@/data/use-cases';

export const makeDeleteTask = (): RemoteDeleteTask => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/task`;
  const fetchAdapter = new FetchAdapter();
  const remoteDeleteTask = new RemoteDeleteTask(url, fetchAdapter);
  return remoteDeleteTask;
};
