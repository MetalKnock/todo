import { useEffect } from 'react';
import { fetchTodos } from '@/entities/todo/model/todoServices';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { TodoList } from '@/widgets/TodoList';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import styles from './Main.module.scss';
import Spinner from '@/shared/ui/Spinner/ui/Spinner';
import { CreateTodo } from '@/features/CreateTodo';

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
      {!isIdle && <CreateTodo />}
      {isLoading && <Spinner />}
      {isIdle && !isLoading && <p>Empty</p>}
      {!isIdle && !error && !isLoading && <TodoList todos={todos} />}
      {error && <ErrorMessage errorMessage={error} />}
    </div>
  );
};

export default Main;
