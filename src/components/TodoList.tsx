import { useState } from 'react';
import type { Filter } from '../types';
import Todo from './Todo';
import './TodoList.css';
import { useAppSelector } from '../store/hooks';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../store/todoStore';

export default function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo.todos;
  });
  const dispatch = useDispatch();
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
          onClick={() => {
            dispatch(clearCompleted());
          }}
        >
          clear completed
        </button>
      </div>
    </div>
  );
}
