import { toggleTodoById } from '@/entities/todo/model/todoSlice';
import styles from './ToggleTodo.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { CheckBox } from '@/shared/ui/CheckBox';

interface ToggleTodoProps {
  className?: string;
  completed: boolean;
  id: number;
}

const ToggleTodo = ({ className, completed, id }: ToggleTodoProps) => {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(toggleTodoById(id));
  };

  return (
    <CheckBox
      className={`${styles.ToggleTodo} ${className}`}
      id={String(id)}
      type='checkbox'
      checked={completed}
      onChange={handleChange}
    />
  );
};

export default ToggleTodo;
