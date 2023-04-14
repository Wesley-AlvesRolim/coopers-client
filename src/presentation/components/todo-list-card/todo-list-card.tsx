'use client';
import { Fragment } from 'react';
import { Button, Draggable, IsVisible, Task } from '@/presentation/components';
import { useTodo } from '@/presentation/store';
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
  const { removeAllTasksByState, filterTasksByIsDone } = useTodo(
    (state) => state
  );
  const tasks = filterTasksByIsDone(listState === 'done');

  return (
    <div id="todo-list-card" className={`${listState}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tasks.map((task, index) => (
          <Fragment key={task.id}>
            <IsVisible condition={task.description !== ''}>
              <Draggable draggableId={task.id} index={index}>
                <Task
                  id={task.id}
                  key={task.id}
                  title={task.description}
                  listState={listState}
                />
              </Draggable>
            </IsVisible>
            <IsVisible
              condition={task.description === '' && listState === 'todo'}
            >
              <NewTaskItem taskId={task.id} listState={listState} />
            </IsVisible>
          </Fragment>
        ))}
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

export default TodoListCard;
