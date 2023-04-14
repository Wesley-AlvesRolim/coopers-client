import { type FocusEvent } from 'react';
import { Checkbox } from '@/presentation/components';
import { useTodo } from '@/presentation/store';

interface NewTaskItemProps {
  taskId: string;
  listState: 'todo' | 'done';
}

const NewTaskItem = ({ taskId, listState }: NewTaskItemProps): JSX.Element => {
  const {
    addTask: addTaskToStore,
    editTask,
    removeTask,
  } = useTodo((state) => state);

  const initializeAddTask = () => {
    addTaskToStore({
      description: '',
      isDone: false,
    });
  };

  const addTask = (event: FocusEvent<HTMLInputElement>, id: string) => {
    if (event.target.value === '') {
      removeTask(id);
      return;
    }

    editTask({
      id,
      description: event.target.value,
      isDone: false,
    });
  };

  return (
    <li className="task">
      <Checkbox className={`${listState}`} />
      <input
        className="task-description"
        type="text"
        placeholder="Type your task..."
        onFocus={initializeAddTask}
        onBlur={(event) => {
          addTask(event, taskId);
        }}
      />
    </li>
  );
};

export default NewTaskItem;
