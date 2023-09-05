import { toggleTodoById } from '@/entities/todo/model/todoSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { CheckBox } from '@/shared/ui/CheckBox';

interface ToggleTodoProps {
  className?: string;
  completed: boolean;
  id: number;
  title: string;
}

const ToggleTodo = ({ className, completed, id, title }: ToggleTodoProps) => {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(toggleTodoById(id));
  };

  return (
    <CheckBox
      className={className}
      id={String(id)}
      type='checkbox'
      checked={completed}
      onChange={handleChange}
      aria-label={`toggle todo: ${title}`}
    />
  );
};

ToggleTodo.defaultProps = {
  className: '',
};

export default ToggleTodo;
