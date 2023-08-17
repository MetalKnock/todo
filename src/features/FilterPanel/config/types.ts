import { FiltrationType } from '@/entities/todo/model/todoTypes';

interface FilterItem {
  id: number;
  type: FiltrationType;
}

export type { FilterItem };
