import { TodoListCard } from '@/presentation/components';
import './todo-list-section.css';

const TodoListSection = (): JSX.Element => {
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
              Congratulions! <span>You have done 5 tasks</span>
            </>
          }
          listState="done"
        />
      </div>
    </section>
  );
};

export default TodoListSection;
