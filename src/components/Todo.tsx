import iconCheck from '../images/icon-check.svg';
import IconX from '../images/icon-cross.svg?react';

import './Todo.css';

import type { TodoType } from '../types';
import { useAppDispatch } from '../store/hooks';
import { deleteTodo, toggleDone } from '../store/todoStore';

type TodoProps = {
  todo: TodoType;
};

export default function Todo({ todo }: TodoProps) {
  const dispatch = useAppDispatch();
  return (
    <li className="Todo">
      <span
        className={`circle_shape ${todo.completed ? 'ok' : ''}`}
        onClick={() => {
          dispatch(toggleDone(todo.id));
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
          dispatch(deleteTodo(todo.id));
        }}
      >
        <IconX className="icon_cross " />
      </i>
    </li>
  );
}
