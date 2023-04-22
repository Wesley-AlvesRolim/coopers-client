import { type Task } from './add-task';

export interface ReadTasksRequest {
  userId: number;
}

export interface ReadTasksResponse {
  tasks: Task[];
}

export interface ReadTasks {
  read: (params: ReadTasksRequest) => Promise<ReadTasksResponse>;
}
