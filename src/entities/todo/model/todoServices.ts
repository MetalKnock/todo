import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos } from './todoApi';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';

const fetchTodos = createAsyncThunk('todo/fetchTodos', async (query: string[]) => {
  try {
    const response = await getTodos(query);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(FETCH_ERROR_MESSAGE);
  }
});

export { fetchTodos };
