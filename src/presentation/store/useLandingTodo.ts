import { create } from 'zustand';
import { type TodoStore } from '@/presentation/types';
import { makeFetchLandingTodoData } from '@/main/factories';

const fetchTodoData = makeFetchLandingTodoData();

const useLandingTodo = create<TodoStore>((set, get) => ({
  taskList: [],

  filterTasksByIsDone: (isDone) => {
    return get().taskList.filter((task) => task.isDone === isDone);
  },

  fetch: async () => {
    const response = await fetchTodoData.get();
    set({ taskList: response });
  },

  addTask: async (task) => {
    const taskId = Number(get().taskList.at(-1)?.id) + 1;
    set((store) => ({
      ...store,
      taskList: [...store.taskList, { id: taskId, ...task }],
    }));
  },

  editTask: async (taskData) => {
    const editedTaskFromList = get().taskList.map((task) =>
      Number(task.id) === taskData.id ? taskData : task
    );

    set((store) => ({
      ...store,
      taskList: [...editedTaskFromList],
    }));
  },

  editTaskState: async (id, isDone) => {
    const editedTaskFromList = get().taskList.map((task) =>
      Number(task.id) === id ? { ...task, isDone } : task
    );

    set((store) => ({
      ...store,
      taskList: [...editedTaskFromList],
    }));
  },

  removeTask: async (taskId) => {
    const removedTaskFromList = get().taskList.filter(
      (task) => Number(task.id) !== taskId
    );

    set((store) => ({
      ...store,
      taskList: [...removedTaskFromList],
    }));
  },

  removeAllTasksByState: async (isDone) => {
    const removedTasksFromList = get().taskList.filter(
      (task) => task.description === '' || task.isDone !== isDone
    );

    set((store) => ({
      ...store,
      taskList: [...removedTasksFromList],
    }));
  },
}));

export default useLandingTodo;
