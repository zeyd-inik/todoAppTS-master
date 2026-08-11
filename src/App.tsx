import { useEffect, useState } from 'react';
import './App.css';
import { type Theme } from './types';

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
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };
  return (
    <div className="App">
      <main>
        <Header
          changeTheme={changeTheme}
          theme={theme}
        />
        <TodoInput />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
