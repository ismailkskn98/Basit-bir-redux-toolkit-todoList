import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoInitialState, TodoItem } from '../../types/types';

const initialState: TodoInitialState = {
  isLoading: false,
  isOpenLoading: true,
  todoList: [],
  content: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeIsOpenLoading: (state, action: PayloadAction<boolean>) => {
      state.isOpenLoading = action.payload;
    },
    changeContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todoList.push(action.payload);
      state.content = '';
    },
    removeTodo: (state, action: PayloadAction<number | string>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, changeContent, changeIsOpenLoading } = todoSlice.actions;

export default todoSlice.reducer;
