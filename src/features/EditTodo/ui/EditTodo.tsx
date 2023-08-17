import { ReactComponent as EditIcon } from '@/shared/assets/icons/edit.svg';
import styles from './EditTodo.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { setNewTitle } from '@/entities/todo/model/todoSlice';

interface EditTodoProps {
  className?: string;
  id: number;
  title: string;
}

const EditTodo = ({ className, id, title }: EditTodoProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    const newTitle = prompt('Enter new title', title);
    dispatch(setNewTitle({ id, title: newTitle || '' }));
  };
  return <EditIcon className={`${styles.EditTodo} ${className}`} onClick={handleClick} />;
};

export default EditTodo;
