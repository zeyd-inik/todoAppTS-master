import iconCheck from '../images/icon-check.svg';
import IconX from '../images/icon-cross.svg?react';

import './Todo.css';

import type { TodoType } from '../types';
type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

export default function Todo({ todo, deleteTodo, toggleDone }: TodoProps) {
  return (
    <li className="Todo">
      <span
        className={`circle_shape ${todo.completed ? 'ok' : ''}`}
        onClick={() => {
          toggleDone(todo.id);
        }}
      >
        {todo.completed && (
          <img
            className="icon_check"
            src={iconCheck}
            alt="tick sign"
          />
        )}
      </span>

      <span className={`text ${todo.completed ? 'done' : ''}`}>
        {todo.text}
      </span>
      <i
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <IconX className="icon_cross " />
      </i>
    </li>
  );
}
