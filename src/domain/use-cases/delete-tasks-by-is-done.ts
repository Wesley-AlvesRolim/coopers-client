export interface DeleteTasksByIsDoneRequest {
  userId: number;
  isDone: boolean;
}

export interface DeleteTasksByIsDone {
  delete: (params: DeleteTasksByIsDoneRequest) => Promise<void>;
}
