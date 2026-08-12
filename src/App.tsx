import { useEffect, useState } from 'react';
import './App.css';
import { type Theme, type TodoType } from './types';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [todos, setTodos] = useState<TodoType[]>(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    localStorage.setItem('todos', JSON.stringify([]));
    return [];
  });

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };

  const addTodo = (text: string): void => {
    const newTodo: TodoType = {
      text,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const deleteTodo = (id: string) => {
    const newTodos: TodoType[] = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <main>
        <Header
          changeTheme={changeTheme}
          theme={theme}
        />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
