import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { createTodo } from '@/entities/todo/model/todoSlice';
import { CREATE_TODO_PLACEHOLDER } from '@/shared/constants/todo';
import styles from './CreateTodo.module.scss';

interface CreateTodoProps {
  className?: string;
}

const CreateTodo = ({ className }: CreateTodoProps) => {
  const dispatch = useAppDispatch();

  const [titleTodo, setTitleTodo] = useState('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setTitleTodo(event.target.value);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedTitle = titleTodo.trim();
    if (trimmedTitle) {
      dispatch(createTodo(trimmedTitle));
      setTitleTodo('');
    }
  };

  return (
    <form className={`${styles.CreateTodo} ${className}`} onSubmit={handleSubmit}>
      <Input placeholder={CREATE_TODO_PLACEHOLDER} value={titleTodo} onChange={handleChangeInput} />
      <Button className={styles.button} type='submit' disabled={!titleTodo}>
        Add todo
      </Button>
    </form>
  );
};

CreateTodo.defaultProps = {
  className: '',
};

export default CreateTodo;
