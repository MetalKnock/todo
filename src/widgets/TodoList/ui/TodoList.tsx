import { Todo, TodoItem, TodoView } from '@/entities/todo';
import { EditTodoButton, EditTodoForm } from '@/features/EditTodo';
import { DeleteTodo } from '@/features/DeleteTodo';
import { ToggleTodo } from '@/features/ToggleTodo';
import styles from './TodoList.module.scss';

interface TodoListProps {
  className?: string;
  todos: Todo[];
}

const TodoList = ({ className, todos }: TodoListProps) => {
  return (
    <ul className={`${styles.TodoList} ${className}`}>
      {todos.map((todo) => {
        const { id, completed, isEdit } = todo;
        return (
          <TodoItem
            key={id}
            leftSlot={<ToggleTodo completed={completed} id={id} />}
            rightSlot={
              <div className={styles.rightSlot}>
                <EditTodoButton id={id} />
                <DeleteTodo id={id} />
              </div>
            }
          >
            {!isEdit ? <TodoView todo={todo} /> : <EditTodoForm todo={todo} />}
          </TodoItem>
        );
      })}
    </ul>
  );
};

TodoList.defaultProps = {
  className: '',
};

export default TodoList;
