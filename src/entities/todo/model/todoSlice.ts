import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FiltrationType, Todo } from '@/entities/todo/model/todoTypes';
import { fetchTodos } from './todoServices';
import { LIMIT_TODOS, USER_ID } from '@/shared/constants/todo';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';

interface TodoSliceState {
  todos: Todo[];
  isLoading: boolean;
  isIdle: boolean;
  error: string | null;
  counterIds: number;
  filtrationType: FiltrationType;
}

const initialState: TodoSliceState = {
  todos: [],
  isLoading: false,
  isIdle: true,
  error: null,
  counterIds: 0,
  filtrationType: 'all',
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
        isEdit: false,
      };
      state.todos.push(todo);
    },
    toggleTodoById: (state, { payload }: PayloadAction<number>) => {
      const currentTodo = state.todos.find((todo) => todo.id === payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    setFiltrationType: (state, { payload }: PayloadAction<FiltrationType>) => {
      state.filtrationType = payload;
    },
    toggleEditById: (state, { payload }: PayloadAction<number>) => {
      const currentTodo = state.todos.find((todo) => todo.id === payload);
      if (currentTodo) {
        currentTodo.isEdit = !currentTodo.isEdit;
      }
    },
    updateTodo: (state, { payload }: PayloadAction<Pick<Todo, 'id' | 'title'>>) => {
      const currentTodo = state.todos.find((todo) => todo.id === payload.id);
      if (currentTodo) {
        currentTodo.title = payload.title;
        currentTodo.isEdit = false;
      }
    },
    deleteTodoById: (state, { payload }: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    filterCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        if (state.isIdle) {
          state.isIdle = false;
        }
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        state.todos = action.payload.map((todo) => ({ ...todo, isEdit: false }));
        state.counterIds = LIMIT_TODOS;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || FETCH_ERROR_MESSAGE;
      });
  },
});

export const {
  createTodo,
  toggleTodoById,
  setFiltrationType,
  toggleEditById,
  updateTodo,
  filterCompleted,
  deleteTodoById,
} = todoSlice.actions;

export { todoSlice };
