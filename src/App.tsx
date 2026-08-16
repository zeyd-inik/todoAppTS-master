import { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useAppSelector } from './store/hooks';

function App() {
  const theme = useAppSelector((store) => {
    return store.theme;
  });
  const todos = useAppSelector((store) => {
    return store.todo.todos;
  });
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <main>
        <Header />
        <TodoInput />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
