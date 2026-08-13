import type { TodoType } from '../types';
import Todo from './Todo';
import './TodoList.css';
type TodoListProps = {
  todos: TodoType[];
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

export default function TodoList({
  todos,
  deleteTodo,
  toggleDone,
}: TodoListProps) {
  return (
    <div className="TodoList">
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
            />
          );
        })}
      </ul>

      <div className="todo_remains">
        <span className="info">5 items left</span>
        <div className="progress">
          <span className="state">All</span>
          <span className="state">Active</span>
          <span className="state ">Completed</span>
        </div>
        <button className="clear_completed">clear completed</button>
      </div>
    </div>
  );
}
