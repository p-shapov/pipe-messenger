import { createSlice } from '@reduxjs/toolkit';
import { reducers, extraReducers } from './reducers';
import { initialState } from './initial';

export const slice = createSlice({
  name: 'chat',
  initialState,
  reducers,
  extraReducers,
});

export const { resetChatList } = slice.actions;

export default slice.reducer;
