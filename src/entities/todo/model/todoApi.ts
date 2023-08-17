import { API_URL, ApiPath } from '@/shared/constants/api';
import { Todo } from './todoTypes';
import { USER_ID } from '@/shared/constants/todo';

const getTodos = async () => {
  const response = await fetch(`${API_URL}${ApiPath.USERS}/${USER_ID}${ApiPath.TODOS}`);

  if (!response.ok) {
    throw new Error('Failed to get Todos');
  }

  const data: Todo[] = await response.json();

  return data;
};

export { getTodos };
