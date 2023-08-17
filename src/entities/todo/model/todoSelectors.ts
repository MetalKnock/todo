import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';
import { FiltrationType } from './todoTypes';

const getTodo = (state: RootState) => state.todo;

const getAllTodos = createSelector(getTodo, (state) => state.todos);
const getActiveTodos = createSelector(getTodo, (state) =>
  state.todos.filter((todo) => !todo.completed)
);
const getCompletedTodos = createSelector(getTodo, (state) =>
  state.todos.filter((todo) => todo.completed)
);

const getSelectedTodosSelector = (type: FiltrationType) => {
  switch (type) {
    case 'all':
      return getAllTodos;
    case 'active':
      return getActiveTodos;
    case 'completed':
      return getCompletedTodos;
    default:
      return getAllTodos;
  }
};

export { getAllTodos, getActiveTodos, getCompletedTodos, getSelectedTodosSelector };
