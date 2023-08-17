import { ReactNode } from 'react';
import { Todo } from '../../model/todoTypes';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  className?: string;
  todo: Todo;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

const TodoItem = ({ className, todo, leftSlot, rightSlot }: TodoItemProps) => {
  const { title, completed } = todo;
  return (
    <li className={`${styles.TodoItem} ${className}`}>
      <div>{leftSlot}</div>
      <p className={`${styles.text} ${completed ? styles.text_strikethrough : ''}`}>{title}</p>
      <div>{rightSlot}</div>
    </li>
  );
};

export default TodoItem;
