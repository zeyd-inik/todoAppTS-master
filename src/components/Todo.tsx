import iconCheck from '../images/icon-check.svg';
import IconX from '../images/icon-cross.svg?react';
import type { TodoType } from '../types';
import './Todo.css';
type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => void;
};
export default function Todo({ todo, deleteTodo }: TodoProps) {
  return (
    <li className="Todo">
      <span className="circle_shape">
        <img
          className="icon_check"
          src={iconCheck}
          alt=""
        />
      </span>

      <span className="text">{todo.text}</span>
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
