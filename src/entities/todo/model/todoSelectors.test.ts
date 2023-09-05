import { describe, expect, it } from 'vitest';
import {
  getActiveTodos,
  getAllTodos,
  getCompletedTodos,
  getSelectedTodosSelector,
} from './todoSelectors';
import { TodoSliceState } from './todoSlice';
import { MOCK_TODOS } from '@/shared/mocks/data';

describe('', () => {
  it('getAllTodos selector returns all todos', () => {
    const initSlice: TodoSliceState = {
      todos: MOCK_TODOS,
      counterIds: MOCK_TODOS.length,
      error: null,
      filtrationType: 'all',
      isIdle: false,
      isLoading: false,
    };
    const mockState = {
      todo: initSlice,
    };

    const result = getAllTodos(mockState);

    expect(result).toEqual(mockState.todo.todos);
  });

  it('getActiveTodos selector returns active todos', () => {
    const initSlice: TodoSliceState = {
      todos: MOCK_TODOS,
      counterIds: MOCK_TODOS.length,
      error: null,
      filtrationType: 'all',
      isIdle: false,
      isLoading: false,
    };
    const mockState = {
      todo: initSlice,
    };

    const result = getActiveTodos(mockState);

    expect(result).toEqual(mockState.todo.todos.filter((todo) => !todo.completed));
  });

  it('getCompletedTodos selector returns completed todos', () => {
    const initSlice: TodoSliceState = {
      todos: MOCK_TODOS,
      counterIds: MOCK_TODOS.length,
      error: null,
      filtrationType: 'all',
      isIdle: false,
      isLoading: false,
    };

    const mockState = {
      todo: initSlice,
    };

    const result = getCompletedTodos(mockState);

    expect(result).toEqual(mockState.todo.todos.filter((todo) => todo.completed));
  });

  it('getSelectedTodosSelector returns the correct selector based on filtration type', () => {
    const allSelector = getSelectedTodosSelector('all');
    const activeSelector = getSelectedTodosSelector('active');
    const completedSelector = getSelectedTodosSelector('completed');

    const initSlice: TodoSliceState = {
      todos: MOCK_TODOS,
      counterIds: MOCK_TODOS.length,
      error: null,
      filtrationType: 'all',
      isIdle: false,
      isLoading: false,
    };

    const mockState = {
      todo: initSlice,
    };

    const allResult = allSelector(mockState);
    const activeResult = activeSelector(mockState);
    const completedResult = completedSelector(mockState);

    expect(allResult).toEqual(mockState.todo.todos);
    expect(activeResult).toEqual(mockState.todo.todos.filter((todo) => !todo.completed));
    expect(completedResult).toEqual(mockState.todo.todos.filter((todo) => todo.completed));
  });
});
