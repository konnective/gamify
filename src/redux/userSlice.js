import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    points: 0,
    pending: null,
    error: null,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.points = action.payload;
    },
    increase: (state, action) => {
      state.points += action.payload;
    },
    updateFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, increase, updateFailure } =
  userSlice.actions;

export default userSlice.reducer;
