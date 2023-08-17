import { Todo, TodoItem } from '@/entities/todo';
import styles from './TodoList.module.scss';
import ToggleTodo from '@/features/ToggleTodo/ui/ToggleTodo';
import { EditTodo } from '@/features/EditTodo';

interface TodoListProps {
  className?: string;
  todos: Todo[];
}

const TodoList = ({ className, todos }: TodoListProps) => {
  return (
    <ul className={`${styles.TodoList} ${className}`}>
      {todos.map((todo) => {
        const { id, title, completed } = todo;
        return (
          <TodoItem
            key={id}
            todo={todo}
            leftSlot={<ToggleTodo completed={completed} id={id} />}
            rightSlot={<EditTodo id={id} title={title} />}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
