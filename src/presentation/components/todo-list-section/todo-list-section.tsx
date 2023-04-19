'use client';
import { useEffect } from 'react';
import { DragDropContext, type DropResult } from 'react-beautiful-dnd';
import { Droppable, TodoListCard } from '@/presentation/components';
import { useAuth, useTodo } from '@/presentation/store';
import './todo-list-section.css';

const TodoListSection = (): JSX.Element => {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const {
    fetch: fetchData,
    editTaskState,
    filterTasksByIsDone,
  } = useTodo()((state) => state);

  const doneTasksLength = filterTasksByIsDone(true).length;

  const updateTaskState = (result: DropResult) => {
    void editTaskState(
      Number(result.draggableId),
      result.destination?.droppableId === 'done'
    );
  };

  useEffect(() => {
    void fetchData();
  }, [fetchData, isAuthenticated]);

  return (
    <section id="todo-list">
      <div id="todo-list-section-title">
        <div className="center">
          <h2>To-do List</h2>
          <p>
            Drag and drop to set your main priorities, check when done and
            create what´s new.
          </p>
        </div>
      </div>
      <DragDropContext onDragEnd={updateTaskState}>
        <div id="todo-cards">
          <Droppable droppableId="todo">
            <TodoListCard
              title="To-do"
              description="Take a breath. Start doing."
              listState="todo"
            />
          </Droppable>
          <Droppable droppableId="done">
            <TodoListCard
              title="Done"
              description={
                <>
                  Congratulions!{' '}
                  <span>You have done {doneTasksLength} tasks</span>
                </>
              }
              listState="done"
            />
          </Droppable>
        </div>
      </DragDropContext>
    </section>
  );
};

export default TodoListSection;
