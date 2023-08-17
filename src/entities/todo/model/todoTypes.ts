interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type FiltrationType = 'all' | 'active' | 'completed';

export type { Todo, FiltrationType };
