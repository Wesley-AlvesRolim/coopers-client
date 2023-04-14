import { create } from 'zustand';
import { type LandingTodoData } from '@/domain/use-cases';
import { makeFetchLandingTodoData } from '@/main/factories';

interface Task extends LandingTodoData {}

interface TodoStore {
  taskList: Task[];
  fetch: () => Promise<void>;
  filterTasksByIsDone: (isDone: boolean) => Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  editTask: (task: Task) => void;
  editTaskState: (id: string, isDone: boolean) => void;
  removeTask: (taskId: string) => void;
  removeAllTasksByState: (isDone: boolean) => void;
}

const fetchTodoData = makeFetchLandingTodoData();

const useTodo = create<TodoStore>((set, get) => ({
  taskList: [],

  fetch: async () => {
    const response = await fetchTodoData.get();
    set({ taskList: response });
  },

  filterTasksByIsDone: (isDone) => {
    return get().taskList.filter((task) => task.isDone === isDone);
  },

  addTask: (task) => {
    const taskId = Number(get().taskList.at(-1)?.id) + 1;
    set((store) => ({
      ...store,
      taskList: [...store.taskList, { id: taskId.toString(), ...task }],
    }));
  },

  editTask: (taskData) => {
    const editedTaskFromList = get().taskList.map((task) =>
      task.id === taskData.id ? taskData : task
    );

    set((store) => ({
      ...store,
      taskList: [...editedTaskFromList],
    }));
  },

  editTaskState: (id, isDone) => {
    const editedTaskFromList = get().taskList.map((task) =>
      task.id === id ? { ...task, isDone } : task
    );

    set((store) => ({
      ...store,
      taskList: [...editedTaskFromList],
    }));
  },

  removeTask: (taskId) => {
    const removedTaskFromList = get().taskList.filter(
      (task) => task.id !== taskId
    );

    set((store) => ({
      ...store,
      taskList: [...removedTaskFromList],
    }));
  },

  removeAllTasksByState: (isDone) => {
    const removedTasksFromList = get().taskList.filter(
      (task) => task.description === '' || task.isDone !== isDone
    );

    set((store) => ({
      ...store,
      taskList: [...removedTasksFromList],
    }));
  },
}));

export default useTodo;
