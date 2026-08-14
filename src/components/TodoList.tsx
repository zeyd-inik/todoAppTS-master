import { useState } from 'react';
import type { TodoType, Filter } from '../types';
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
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodos = todos.filter((todo) => {
    return !todo.completed;
  });

  const isSomeCompleted = todos.some((todo) => {
    return todo.completed === true;
  });

  return (
    <div className="TodoList">
      <ul>
        {filteredTodos.map((todo) => {
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
        <span className="info">{activeTodos.length} items left</span>
        <div className="progress">
          <span
            className={`state ${filter === 'all' ? 'active' : ''}`}
            onClick={() => {
              setFilter('all');
            }}
          >
            All
          </span>
          <span
            className={`state ${filter === 'active' ? 'active' : ''}`}
            onClick={() => {
              setFilter('active');
            }}
          >
            Active
          </span>
          <span
            className={`state ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => {
              setFilter('completed');
            }}
          >
            Completed
          </span>
        </div>
        <button
          className={`clear_completed ${isSomeCompleted ? '' : 'disappear'}`}
        >
          clear completed
        </button>
      </div>
    </div>
  );
}
