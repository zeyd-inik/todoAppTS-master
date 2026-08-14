export type Theme = 'dark' | 'light';

export type Filter = 'all' | 'active' | 'completed';

export type TodoType = {
  text: string;
  id: string;
  completed: boolean;
};
