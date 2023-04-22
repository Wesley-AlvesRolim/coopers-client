import { FetchAdapter } from '@/data/adapters';
import { RemoteFetchLandingTodoData } from '@/data/use-cases';

export const makeFetchLandingTodoData = (): RemoteFetchLandingTodoData => {
  const url = '/api/todo-data';
  const fetchAdapter = new FetchAdapter();
  const fetchLandingTodoData = new RemoteFetchLandingTodoData(
    url,
    fetchAdapter
  );

  return fetchLandingTodoData;
};
