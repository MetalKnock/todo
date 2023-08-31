interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  isEdit: boolean;
}

type FiltrationType = 'all' | 'active' | 'completed';

export type { Todo, FiltrationType };
