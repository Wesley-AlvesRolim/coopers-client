export interface LandingTodoData {
  id: number;
  description: string;
  isDone: boolean;
}

export interface FetchLandingTodoData {
  get: () => Promise<LandingTodoData[]>;
}
