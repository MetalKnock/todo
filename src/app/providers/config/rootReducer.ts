import { combineReducers } from '@reduxjs/toolkit';
import { todoSlice } from '@/entities/todo/model/todoSlice';

const rootReducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
});

export { rootReducer };
