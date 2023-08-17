import { Todo, TodoItem } from '@/entities/todo';
import styles from './TodoList.module.scss';

interface TodoListProps {
  className?: string;
  todos: Todo[];
}

const TodoList = ({ className, todos }: TodoListProps) => {
  return (
    <ul className={`${styles.TodoList} ${className}`}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
