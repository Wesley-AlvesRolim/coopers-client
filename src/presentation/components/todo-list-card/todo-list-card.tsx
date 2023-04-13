'use client';
import { Button, Checkbox, Task } from '@/presentation/components';
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
  return (
    <div id="todo-list-card" className={`${listState}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {Array.from({ length: 1 }).map(() => (
          <Task
            title="this is a new task"
            key="this is a new task"
            listState={listState}
          />
        ))}
        <li className="task">
          <Checkbox className={`${listState}`} />
          <input
            className="task-description"
            type="text"
            placeholder="Type your task..."
          />
        </li>
      </ul>
      <Button variant="black" size="large">
        erase all
      </Button>
    </div>
  );
};

export default TodoList;
