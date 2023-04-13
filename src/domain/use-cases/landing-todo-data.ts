export interface LandingTodoData {
  id: string;
  description: string;
  isDone: boolean;
}

export interface FetchLandingTodoData {
  get: () => Promise<LandingTodoData[]>;
}
