import './TodoInput.css';

export default function TodoInput() {
  return (
    <div className="TodoInput">
      <span className="circle_shape"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        aria-label="Create  new Todo"
      />
    </div>
  );
}
