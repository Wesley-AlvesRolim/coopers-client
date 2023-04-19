'use client';
import { Fragment, useEffect } from 'react';
import { Button, Draggable, IsVisible, Task } from '@/presentation/components';
import { useAuth, useTodo } from '@/presentation/store';
import NewTaskItem from './new-task-item';
import './todo-list-card.css';

interface TodoListCardProps {
  title: string;
  description: React.ReactNode;
  listState: 'todo' | 'done';
}

const TodoListCard = ({
  title,
  description,
  listState,
}: TodoListCardProps): JSX.Element => {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const { removeAllTasksByState, filterTasksByIsDone, fetch } = useTodo()(
    (state) => state
  );
  const tasks = filterTasksByIsDone(listState === 'done');

  useEffect(() => {
    void fetch();
  }, [isAuthenticated, fetch]);

  return (
    <div id="todo-list-card" className={`${listState}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tasks.map((task, index) => (
          <Fragment key={task.id}>
            <IsVisible condition={task.description !== ''}>
              <Draggable draggableId={String(task.id)} index={index}>
                <Task
                  id={String(task.id)}
                  key={task.id}
                  title={task.description}
                  listState={listState}
                />
              </Draggable>
            </IsVisible>
            <IsVisible
              condition={task.description === '' && listState === 'todo'}
            >
              <NewTaskItem taskId={String(task.id)} listState={listState} />
            </IsVisible>
          </Fragment>
        ))}
      </ul>
      <Button
        variant="black"
        size="large"
        onClick={() => {
          void removeAllTasksByState(listState === 'done');
        }}
      >
        erase all
      </Button>
    </div>
  );
};

export default TodoListCard;
