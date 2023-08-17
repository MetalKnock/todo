import { Todo, TodoItem } from '@/entities/todo';
import styles from './TodoList.module.scss';
import ToggleTodo from '@/features/ToggleTodo/ui/ToggleTodo';

interface TodoListProps {
  className?: string;
  todos: Todo[];
}

const TodoList = ({ className, todos }: TodoListProps) => {
  return (
    <ul className={`${styles.TodoList} ${className}`}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          leftSlot={<ToggleTodo completed={todo.completed} id={todo.id} />}
        />
      ))}
    </ul>
  );
};

export default TodoList;
