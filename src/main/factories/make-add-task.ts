import { FetchAdapter } from '@/data/adapters';
import { RemoteAddTask } from '@/data/use-cases';

export const makeAddTask = (): RemoteAddTask => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/task`;
  const fetchAdapter = new FetchAdapter();
  const addTask = new RemoteAddTask(url, fetchAdapter);
  return addTask;
};
