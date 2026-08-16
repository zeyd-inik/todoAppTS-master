import { useState, type KeyboardEvent } from 'react';
import './TodoInput.css';
import { useAppDispatch } from '../store/hooks';
import { addTodo } from '../store/todoStore';

export default function TodoInput() {
  const dispatch = useAppDispatch();

  const [text, setText] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!text.trim()) return;
      dispatch(addTodo(text));
      setText('');
    }
  };
  return (
    <div className="TodoInput">
      <span className="circle_shape"></span>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Create a new todo..."
        aria-label="Create  new Todo"
        value={text}
      />
    </div>
  );
}
