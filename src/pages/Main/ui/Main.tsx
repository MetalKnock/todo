import { useEffect } from 'react';
import { fetchTodos } from '@/entities/todo/model/todoServices';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { TodoList } from '@/widgets/TodoList';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import styles from './Main.module.scss';
import Spinner from '@/shared/ui/Spinner/ui/Spinner';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  const { todos, error, isLoading, isIdle } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className={`${styles.Main} ${className}`}>
      {isLoading && <Spinner />}
      {!isIdle && !error && !isLoading && <TodoList todos={todos} />}
      {error && <ErrorMessage errorMessage={error} />}
      {isIdle && !isLoading && <p>Empty</p>}
    </div>
  );
};

export default Main;
