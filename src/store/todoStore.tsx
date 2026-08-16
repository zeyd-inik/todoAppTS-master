import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../types';

type InitialStateType = {
  todos: TodoType[];
};

const getInitialTodos = (): TodoType[] => {
  const raw = localStorage.getItem('todos');
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) return parsed;

    if (parsed?.todos && Array.isArray(parsed.todos)) return parsed.todos;

    return [];
  } catch {
    return [];
  }
};

const initialState: InitialStateType = {
  todos: getInitialTodos(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        text: action.payload,
        id: crypto.randomUUID(),
        completed: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleDone: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => {
        return todo.completed === false;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleDone, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
