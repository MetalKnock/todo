import { memo } from 'react';
import { ReactComponent as EditIcon } from '@/shared/assets/icons/edit.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { toggleEditById } from '@/entities/todo/model/todoSlice';
import styles from './EditTodoButton.module.scss';

interface EditTodoButtonProps {
  className?: string;
  id: number;
}

const EditTodoButton: React.FC<EditTodoButtonProps> = memo(
  ({ className, id }: EditTodoButtonProps) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
      dispatch(toggleEditById(id));
    };

    return (
      <EditIcon
        className={`${styles.EditTodoButton} ${className}`}
        onClick={handleClick}
        data-testid='edit-todo-button'
      />
    );
  }
);

EditTodoButton.defaultProps = {
  className: '',
};

export default EditTodoButton;
