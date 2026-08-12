import { useState, type KeyboardEvent } from 'react';
import './TodoInput.css';
import type { TodoType } from '../types';
type TodoInputProps = { addTodo: (text: string) => void };

export default function TodoInput({ addTodo }: TodoInputProps) {
  const [text, setText] = useState<string>('');
  const [todo, setTodo] = useState<TodoType | object>({});

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!text.trim()) return;
      addTodo(text);
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
