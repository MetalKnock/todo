import { ReactNode, memo } from 'react';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  className?: string;
  leftSlot?: ReactNode;
  children: ReactNode;
  rightSlot?: ReactNode;
}

const TodoItem: React.FC<TodoItemProps> = memo(
  ({ className, leftSlot, children, rightSlot }: TodoItemProps) => {
    return (
      <li className={`${styles.TodoItem} ${className}`}>
        {leftSlot}
        {children}
        {rightSlot}
      </li>
    );
  }
);

TodoItem.defaultProps = {
  className: '',
  leftSlot: null,
  rightSlot: null,
};

export default TodoItem;
