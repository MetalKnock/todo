import { ReactComponent as DeleteIcon } from '@/shared/assets/icons/delete.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { deleteTodoById } from '@/entities/todo/model/todoSlice';
import styles from './DeleteTodo.module.scss';

interface DeleteTodoProps {
  className?: string;
  id: number;
}

const DeleteTodo = ({ className, id }: DeleteTodoProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteTodoById(id));
  };

  return (
    <DeleteIcon
      className={`${styles.DeleteTodo} ${className}`}
      onClick={handleClick}
      data-testid='delete-todo'
    />
  );
};

DeleteTodo.defaultProps = {
  className: '',
};

export default DeleteTodo;
