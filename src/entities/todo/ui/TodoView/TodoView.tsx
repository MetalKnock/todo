import { memo } from 'react';
import styles from './TodoView.module.scss';
import { Todo } from '../../model/todoTypes';

interface TodoViewProps {
  className?: string;
  todo: Todo;
}

const TodoView = memo(({ className, todo }: TodoViewProps) => {
  const { title, completed } = todo;
  return (
    <p className={`${styles.text} ${completed ? styles.text_lineThrough : ''} ${className}`}>
      {title}
    </p>
  );
});

export default TodoView;
