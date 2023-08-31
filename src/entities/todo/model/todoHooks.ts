import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { getSelectedTodosSelector } from './todoSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchTodos } from './todoServices';

const useTodos = (query: string[]) => {
  const { error, isLoading, isIdle, filtrationType } = useAppSelector((state) => state.todo);

  const selectedTodosSelector = getSelectedTodosSelector(filtrationType);
  const todos = useSelector(selectedTodosSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos(query));
  }, [dispatch, query]);

  return { error, isLoading, isIdle, todos, filtrationType };
};
export { useTodos };
