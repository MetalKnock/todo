import { useMemo } from 'react';
import { TodoList } from '@/widgets/TodoList';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import { Spinner } from '@/shared/ui/Spinner/';
import { CreateTodo } from '@/features/CreateTodo';
import { FilterPanel } from '@/features/FilterPanel/';
import { DeleteAllCompleted } from '@/features/DeleteAllCompleted';
import { LIMIT_TODOS } from '@/shared/constants/todo';
import { useTodos } from '@/entities/todo';
import styles from './Main.module.scss';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  const query = useMemo(() => [`_limit=${LIMIT_TODOS}`], []);
  const { todos, error, isLoading, isIdle, filtrationType } = useTodos(query);

  const shouldShowTodoList = !isIdle && !error && !isLoading && todos.length !== 0;
  const shouldShowEmptyMessage = !isIdle && !error && !isLoading && todos.length === 0;
  const shouldShowDeleteAllCompleted = filtrationType === 'completed' && todos.length !== 0;

  return (
    <div className={`${styles.Main} ${className}`}>
      <div>
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
        {error && <ErrorMessage errorMessage={error} />}
      </div>
      {shouldShowDeleteAllCompleted && <DeleteAllCompleted className={styles.deleteAll} />}
    </div>
  );
};

Main.defaultProps = {
  className: '',
};

export default Main;
