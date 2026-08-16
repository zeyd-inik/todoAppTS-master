import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import type { RootState } from './store.ts';
import type { AppDispatch } from './store.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);
