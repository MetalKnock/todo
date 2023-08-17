import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos } from './todoApi';

const fetchTodos = createAsyncThunk('todo/fetchTodos', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await getTodos();

    return response;
  } catch (error) {
    if (error instanceof Error) {
      rejectWithValue(error.message);
    }
    rejectWithValue('Failed fetch');
  }
  return [];
});

export { fetchTodos };
