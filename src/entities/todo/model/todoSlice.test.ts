import { beforeEach, describe, expect, it } from 'vitest';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  TodoSliceState,
  createTodo,
  deleteTodoById,
  filterCompleted,
  setFiltrationType,
  todoSlice,
  toggleEditById,
  toggleTodoById,
  updateTodo,
} from './todoSlice';
import { MOCK_TODOS } from '@/shared/mocks/data';
import { FiltrationType, Todo } from './todoTypes';
import { fetchTodos } from '..';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';

describe('todoSlice', () => {
  let initialState: TodoSliceState;

  beforeEach(() => {
    initialState = {
      todos: MOCK_TODOS,
      isLoading: false,
      isIdle: true,
      error: null,
      counterIds: 1,
      filtrationType: 'all',
    };
  });

  it('should create a new todo', () => {
    const payload = 'New Todo Title';

    const nextState = todoSlice.reducer(initialState, createTodo(payload));

    expect(nextState.todos.length).toBe(initialState.todos.length + 1);
    expect(nextState.todos[nextState.todos.length - 1].title).toBe(payload);
  });

  it('should toggle a todo completion status', () => {
    const todoId = 1;

    const nextState = todoSlice.reducer(initialState, toggleTodoById(todoId));

    expect(nextState.todos[0].completed).toBe(!initialState.todos[0].completed);
  });

  it('should set the filtration type in the state', () => {
    const newFiltrationType: FiltrationType = 'completed';

    const nextState = todoSlice.reducer(initialState, setFiltrationType(newFiltrationType));

    expect(nextState.filtrationType).toBe(newFiltrationType);
  });

  it('should toggle the isEdit property of a todo by id', () => {
    const todoId = 1;

    const nextState = todoSlice.reducer(initialState, toggleEditById(todoId));

    const updatedTodo = nextState.todos.find((todo) => todo.id === todoId);
    const otherTodos = nextState.todos.filter((todo) => todo.id !== todoId);

    expect(updatedTodo).toBeDefined();
    expect(updatedTodo?.isEdit).toBe(
      !initialState.todos.find((todo) => todo.id === todoId)?.isEdit
    );

    otherTodos.forEach((todo) => {
      expect(todo.isEdit).toBe(initialState.todos.find((t) => t.id === todo.id)?.isEdit);
    });
  });

  it('should update the title of a todo by id', () => {
    const todoId = 1;
    const newTitle = 'Updated Title';

    const nextState = todoSlice.reducer(initialState, updateTodo({ id: todoId, title: newTitle }));

    const updatedTodo = nextState.todos.find((todo) => todo.id === todoId);

    expect(updatedTodo).toBeDefined();
    expect(updatedTodo?.title).toBe(newTitle);

    expect(updatedTodo?.isEdit).toBe(false);

    const otherTodos = nextState.todos.filter((todo) => todo.id !== todoId);

    otherTodos.forEach((todo) => {
      const originalTodo = initialState.todos.find((t) => t.id === todo.id);
      expect(todo.title).toBe(originalTodo?.title);
      expect(todo.isEdit).toBe(originalTodo?.isEdit);
    });
  });

  it('should delete a todo by id', () => {
    const todoId = 2;

    const nextState = todoSlice.reducer(initialState, deleteTodoById(todoId));

    expect(nextState.todos.some((todo) => todo.id === todoId)).toBe(false);
  });

  it('should filter completed todos', () => {
    const currentInitialState: TodoSliceState = {
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
          isEdit: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
          isEdit: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: true,
          isEdit: false,
        },
      ],
      isLoading: false,
      isIdle: true,
      error: null,
      counterIds: 1,
      filtrationType: 'all',
    };

    const completedTodos = currentInitialState.todos.filter((todo) => todo.completed);
    const nextState = todoSlice.reducer(currentInitialState, filterCompleted());

    const newCompletedTodos = nextState.todos.filter((todo) => todo.completed);
    const incompleteTodos = nextState.todos.filter((todo) => !todo.completed);

    expect(newCompletedTodos.length).toBe(0);
    expect(incompleteTodos.length).toBe(currentInitialState.todos.length - completedTodos.length);
  });

  it('should handle fetchTodos.pending', () => {
    const action = { type: fetchTodos.pending.type };
    const nextState = todoSlice.reducer(initialState, action);

    expect(nextState.isLoading).toBe(true);
    expect(nextState.error).toBe(null);
  });

  it('should handle fetchTodos.fulfilled', () => {
    const action: PayloadAction<Todo[]> = { type: fetchTodos.fulfilled.type, payload: MOCK_TODOS };
    const nextState = todoSlice.reducer(initialState, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.todos.length).toBe(MOCK_TODOS.length);
  });

  it('should handle fetchTodos.rejected', () => {
    const action = { type: fetchTodos.rejected.type };
    const nextState = todoSlice.reducer(initialState, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(FETCH_ERROR_MESSAGE);
  });
});
