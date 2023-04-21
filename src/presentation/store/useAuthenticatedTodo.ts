import { create } from 'zustand';
import {
  makeAddTask,
  makeDeleteTask,
  makeDeleteTasksByIsDone,
  makeEditTask,
  makeReadTasks,
} from '@/main/factories';
import useAuth from './useAuth';
import { type TodoStore } from '@/presentation/types';

const fetchUserTasks = makeReadTasks();
const fetchCreateTask = makeAddTask();
const fetchEditTask = makeEditTask();
const fetchDeleteTask = makeDeleteTask();
const fetchDeleteTasksByIsDone = makeDeleteTasksByIsDone();

let userData = useAuth.getState().userData;
useAuth.subscribe((state) => {
  userData = state.userData;
  void useAuthenticatedTodo.getState().fetch();
});

const emptyTask = (length: number) => ({
  id: length + 1,
  description: '',
  isDone: false,
});

const useAuthenticatedTodo = create<TodoStore>((set, get) => ({
  taskList: [],

  fetch: async () => {
    if (userData.id !== undefined) {
      const response = await fetchUserTasks.read({
        userId: userData.id,
      });
      set({
        taskList: [...response.tasks, emptyTask(response.tasks.length)],
      });
    }
  },

  filterTasksByIsDone: (isDone) => {
    return get().taskList.filter((task) => task.isDone === isDone);
  },

  addTask: async (task) => {
    if (userData.id !== undefined && task.description.length > 0) {
      await fetchCreateTask.add({
        task: {
          authorId: userData.id,
          description: task.description,
          isDone: task.isDone,
        },
      });
      await get().fetch();
    } else {
      set((store) => ({
        ...store,
        taskList: [
          ...store.taskList,
          { id: Number(get().taskList.at(-1)?.id) + 1, ...task },
        ],
      }));
    }
  },

  editTask: async (taskData) => {
    const editedTaskFromList = get().taskList.map((task) =>
      Number(task.id) === taskData.id ? taskData : task
    );

    set((store) => ({
      ...store,
      taskList: [...editedTaskFromList],
    }));
    await fetchEditTask.edit({
      id: taskData.id,
      isDone: taskData.isDone,
      description: taskData.description,
    });
  },

  editTaskState: async (id, isDone) => {
    const description = get().taskList.reduce((acc, task) => {
      return task.id === Number(id) ? task.description : acc;
    }, '');

    await fetchEditTask.edit({
      id,
      isDone,
      description,
    });

    await get().fetch();
  },

  removeTask: async (taskId, isEmpty = false) => {
    const removedTaskFromList = get().taskList.filter(
      (task) => Number(task.id) !== taskId
    );

    if (!isEmpty) {
      await fetchDeleteTask.delete({
        id: taskId,
      });

      await get().fetch();
      return;
    }
    set((store) => ({
      ...store,
      taskList: [...removedTaskFromList],
    }));
  },

  removeAllTasksByState: async (isDone) => {
    await fetchDeleteTasksByIsDone.delete({
      userId: Number(userData.id),
      isDone,
    });
    await get().fetch();
  },
}));

export default useAuthenticatedTodo;
