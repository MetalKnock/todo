import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos } from './todoApi';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';

const fetchTodos = createAsyncThunk('todo/fetchTodos', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await getTodos();

    return response;
  } catch (error) {
    if (error instanceof Error) {
      rejectWithValue(error.message);
    }
    rejectWithValue(FETCH_ERROR_MESSAGE);
  }
  return [];
});

export { fetchTodos };
