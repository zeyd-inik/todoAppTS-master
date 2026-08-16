import { createSlice } from '@reduxjs/toolkit';
import type { Theme } from '../types';

const getInitialTheme = (): Theme => {
  const saved = (localStorage.getItem('theme') as Theme) || null;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialTheme(),
  reducers: {
    changeTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
