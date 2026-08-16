import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../store/themeStore';
import todoSlice from '../store/todoStore';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
