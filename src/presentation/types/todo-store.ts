import { type Task } from '@/domain/use-cases';

export interface TodoStore {
  taskList: Task[];
  fetch: () => Promise<void>;
  filterTasksByIsDone: (isDone: boolean) => Task[];
  addTask: (task: Omit<Task, 'id'>) => Promise<void>;
  editTask: (task: Task) => Promise<void>;
  editTaskState: (id: number, isDone: boolean) => Promise<void>;
  removeTask: (taskId: number, isEmpty?: boolean) => Promise<void>;
  removeAllTasksByState: (isDone: boolean) => Promise<void>;
}
