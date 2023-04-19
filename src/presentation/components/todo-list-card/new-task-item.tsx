import { type FocusEvent } from 'react';
import { Checkbox, Textarea } from '@/presentation/components';
import { useAuth, useTodo } from '@/presentation/store';

interface NewTaskItemProps {
  taskId: string;
  listState: 'todo' | 'done';
}

const NewTaskItem = ({ taskId, listState }: NewTaskItemProps): JSX.Element => {
  const {
    addTask: addTaskToStore,
    editTask,
    removeTask,
  } = useTodo()((state) => state);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  const initializeAddTask = () => {
    void addTaskToStore({
      description: '',
      isDone: false,
    });
  };

  const addTask = async (
    event: FocusEvent<HTMLTextAreaElement>,
    id: string
  ) => {
    if (event.target.value === '') {
      await removeTask(Number(id), true);
      return;
    }

    if (isAuthenticated) {
      await addTaskToStore({
        description: event.target.value,
        isDone: false,
      });
    } else {
      await editTask({
        id: Number(id),
        description: event.target.value,
        isDone: false,
      });
    }
  };

  return (
    <li className="task">
      <Checkbox className={`${listState}`} />
      <Textarea
        className="task-description"
        placeholder="Type your task..."
        onFocus={initializeAddTask}
        onBlur={(event) => {
          void addTask(event, taskId);
        }}
      />
    </li>
  );
};

export default NewTaskItem;
