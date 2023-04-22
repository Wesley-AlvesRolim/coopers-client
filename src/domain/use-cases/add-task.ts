export interface Task {
  id: number;
  isDone: boolean;
  description: string;
}

export interface AddTaskRequest {
  task: Omit<Task, 'id'> & {
    authorId: number;
  };
}

export interface AddTaskResponse {
  task: Task;
}

export interface AddTask {
  add: (params: AddTaskRequest) => Promise<AddTaskResponse>;
}
