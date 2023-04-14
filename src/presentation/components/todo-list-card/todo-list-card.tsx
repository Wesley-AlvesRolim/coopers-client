'use client';
import { type FocusEvent } from 'react';
import { Button, Checkbox, Task } from '@/presentation/components';
import { useTodo } from '@/presentation/store';
import './todo-list-card.css';

interface TodoListProps {
  title: string;
  description: React.ReactNode;
  listState: 'todo' | 'done';
}

const TodoList = ({
  title,
  description,
  listState,
}: TodoListProps): JSX.Element => {
  const {
    addTask: addTaskToStore,
    editTask,
    removeTask,
    removeAllTasksByState,
    filterTasksByIsDone,
  } = useTodo((state) => state);
  const tasks = filterTasksByIsDone(listState === 'done');

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
    <div id="todo-list-card" className={`${listState}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tasks.map((task) =>
          task.description !== '' ? (
            <Task
              id={task.id}
              title={task.description}
              key={task.id}
              listState={listState}
            />
          ) : (
            listState === 'todo' && (
              <li className="task">
                <Checkbox className={`${listState}`} />
                <input
                  className="task-description"
                  type="text"
                  placeholder="Type your task..."
                  onFocus={initializeAddTask}
                  onBlur={(event) => {
                    addTask(event, task.id);
                  }}
                />
              </li>
            )
          )
        )}
      </ul>
      <Button
        variant="black"
        size="large"
        onClick={() => {
          removeAllTasksByState(listState === 'done');
        }}
      >
        erase all
      </Button>
    </div>
  );
};

export default TodoList;
