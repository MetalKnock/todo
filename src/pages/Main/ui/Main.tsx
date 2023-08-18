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
import { FilterPanel } from '@/features/FilterPanel/';
import { DeleteAllCompleted } from '@/features/DeleteAllCompleted';
import styles from './Main.module.scss';

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

  const shouldShowTodoList = !isIdle && !error && !isLoading && todos.length !== 0;
  const shouldShowEmptyMessage = !isIdle && !error && !isLoading && todos.length === 0;
  const shouldShowDeleteAllCompleted = filtrationType === 'completed' && todos.length !== 0;

  return (
    <div className={`${styles.Main} ${className}`}>
      {!isIdle && !isLoading && !error && (
        <>
          <FilterPanel className={styles.filterPanel} />
          <CreateTodo className={styles.createTodo} />
        </>
      )}
      {isLoading && <Spinner />}
      {isIdle && <p className={styles.text}>Idle</p>}
      {shouldShowTodoList && <TodoList todos={todos} />}
      {shouldShowEmptyMessage && <p className={styles.text}>Empty</p>}
      {shouldShowDeleteAllCompleted && <DeleteAllCompleted />}
      {error && <ErrorMessage errorMessage={error} />}
    </div>
  );
};

export default Main;
