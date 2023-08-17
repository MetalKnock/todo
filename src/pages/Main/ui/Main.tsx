import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTodos } from '@/entities/todo/model/todoServices';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { TodoList } from '@/widgets/TodoList';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import { Spinner } from '@/shared/ui/Spinner/';
import { CreateTodo } from '@/features/CreateTodo';
import { getSelectedTodosSelector } from '@/entities/todo/model/todoSelectors';
import FilterPanel from '@/features/FilterPanel/ui/FilterPanel';
import styles from './Main.module.scss';
import { DeleteAllCompleted } from '@/features/DeleteAllCompleted';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  const { error, isLoading, isIdle, filtrationType } = useAppSelector((state) => state.todo);

  const selectedTodosSelector = getSelectedTodosSelector(filtrationType);
  const todos = useSelector(selectedTodosSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={`${styles.Main} ${className}`}>
      {!isIdle && (
        <>
          <FilterPanel />
          <CreateTodo />
        </>
      )}
      {isLoading && <Spinner />}
      {isIdle && !isLoading && <p>Idle</p>}
      {!isIdle && !error && !isLoading && todos.length !== 0 ? (
        <TodoList todos={todos} />
      ) : (
        <p>Empty</p>
      )}
      {filtrationType === 'completed' && todos.length !== 0 && <DeleteAllCompleted />}
      {error && <ErrorMessage errorMessage={error} />}
    </div>
  );
};

export default Main;
