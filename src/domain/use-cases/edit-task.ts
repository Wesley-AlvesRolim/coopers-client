import { type Task } from './add-task';

export interface EditTaskRequest extends Task {}

export interface EditTaskResponse {
  task: Task;
}

export interface EditTask {
  edit: (params: EditTaskRequest) => Promise<EditTaskResponse>;
}
