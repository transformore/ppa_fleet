import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;
