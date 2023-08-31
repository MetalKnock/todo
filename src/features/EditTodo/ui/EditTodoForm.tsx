import { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from '@/entities/todo';
import { updateTodo } from '@/entities/todo/model/todoSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import styles from './EditTodoForm.module.scss';

interface EditTodoFormProps {
  className?: string;
  todo: Todo;
}

const EditTodoForm = ({ className, todo }: EditTodoFormProps) => {
  const { title, id } = todo;
  const dispatch = useAppDispatch();
  const [newTitle, setNewTitle] = useState(title);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setNewTitle(event.target.value);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = newTitle.trim();

    if (trimmedTitle) {
      dispatch(updateTodo({ id, title: newTitle }));
    }
  };

  return (
    <form className={`${styles.EditTodoForm} ${className}`} onSubmit={handleSubmit}>
      <Input value={newTitle} onChange={handleChangeInput} />
      <Button type='submit'>Save</Button>
    </form>
  );
};

EditTodoForm.defaultProps = {
  className: '',
};

export default EditTodoForm;
