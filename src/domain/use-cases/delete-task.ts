export interface DeleteTaskRequest {
  id: number;
}

export interface DeleteTask {
  delete: (params: DeleteTaskRequest) => Promise<void>;
}
