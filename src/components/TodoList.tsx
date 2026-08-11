import Todo from './Todo';
import './TodoList.css';

export default function TodoList() {
  return (
    <div className="TodoList">
      <ul>
        <Todo />
        <Todo />
        <Todo />
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
