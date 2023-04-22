import { FetchAdapter } from '@/data/adapters';
import { RemoteDeleteTasksByIsDone } from '@/data/use-cases';

export const makeDeleteTasksByIsDone = (): RemoteDeleteTasksByIsDone => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/task/delete-all`;
  const fetchAdapter = new FetchAdapter();
  const remoteDeleteTasksByIsDone = new RemoteDeleteTasksByIsDone(
    url,
    fetchAdapter
  );
  return remoteDeleteTasksByIsDone;
};
