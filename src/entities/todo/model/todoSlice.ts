import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '@/entities/todo/model/todoTypes';
import { fetchTodos } from './todoServices';
import { NUMBER_OF_TODOS_RECEIVED, USER_ID } from '@/shared/constants/todo';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';

interface TodoSliceState {
  todos: Todo[];
  isLoading: boolean;
  isIdle: boolean;
  error: string | null;
  counterIds: number;
}

const initialState: TodoSliceState = {
  todos: [],
  isLoading: false,
  isIdle: true,
  error: null,
  counterIds: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, { payload }: PayloadAction<string>) => {
      state.counterIds += 1;
      const todo: Todo = {
        userId: USER_ID,
        id: state.counterIds,
        title: payload,
        completed: false,
      };
      state.todos.push(todo);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        if (state.isIdle) {
          state.isIdle = false;
        }
        state.isLoading = false;
        state.todos = action.payload.slice(0, NUMBER_OF_TODOS_RECEIVED);
        state.counterIds = NUMBER_OF_TODOS_RECEIVED;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || FETCH_ERROR_MESSAGE;
      });
  },
});

export const { createTodo } = todoSlice.actions;

export { todoSlice };
