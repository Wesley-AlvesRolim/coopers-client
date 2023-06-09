import { type ChangeEvent } from 'react';
import { Checkbox } from '@/presentation/components';
import { useTodo } from '@/presentation/store';
import './task.css';

interface TaskProps {
  id: string;
  title: string;
  listState: string;
}

const Task = ({ id, title, listState }: TaskProps): JSX.Element => {
  const { editTask, removeTask } = useTodo()((state) => state);

  const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '') {
      void removeTask(Number(id));
      return;
    }

    void editTask({
      id: Number(id),
      description: value,
      isDone: listState === 'done',
    });
  };

  const updateTaskState = (event: ChangeEvent<HTMLInputElement>) => {
    void editTask({
      id: Number(id),
      description: title,
      isDone: event.target.checked,
    });
  };

  return (
    <li className="task">
      <Checkbox
        className={`${listState}`}
        onChange={updateTaskState}
        checked={listState === 'done'}
      />
      <input
        className="task-description"
        type="text"
        value={title}
        onChange={updateTitle}
      />
      <button
        onClick={() => {
          void removeTask(Number(id));
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Task;
