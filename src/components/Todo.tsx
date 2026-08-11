import iconCheck from '../images/icon-check.svg';
import IconX from '../images/icon-cross.svg?react';
import './Todo.css';

export default function Todo() {
  return (
    <li className="Todo">
      <span className="circle_shape">
        <img
          className="icon_check"
          src={iconCheck}
          alt=""
        />
      </span>
      {/* change------------------------------------------ */}
      <span className="text">todo text</span>
      <i>
        <IconX className="icon_cross " />
      </i>
    </li>
  );
}
