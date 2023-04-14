'use client';
import { useEffect } from 'react';
import { TodoListCard } from '@/presentation/components';
import { useTodo } from '@/presentation/store';
import './todo-list-section.css';

const TodoListSection = (): JSX.Element => {
  const fetchData = useTodo((state) => state.fetch);

  const doneTasksLength = useTodo(
    (state) => state.filterTasksByIsDone(true).length
  );

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

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
      <div id="todo-cards">
        <TodoListCard
          title="To-do"
          description="Take a breath. Start doing."
          listState="todo"
        />
        <TodoListCard
          title="Done"
          description={
            <>
              Congratulions! <span>You have done {doneTasksLength} tasks</span>
            </>
          }
          listState="done"
        />
      </div>
    </section>
  );
};

export default TodoListSection;
