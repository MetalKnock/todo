import { toggleTodoById } from '@/entities/todo/model/todoSlice';
import styles from './ToggleTodo.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

interface ToggleTodoProps {
  className?: string;
  completed: boolean;
  id: number;
}

const ToggleTodo = ({ className, completed, id }: ToggleTodoProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleTodoById(id));
  };

  return (
    <input
      className={`${styles.ToggleTodo} ${className}`}
      type='checkbox'
      checked={completed}
      onClick={handleClick}
    />
  );
};

export default ToggleTodo;
