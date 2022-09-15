import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  text: '',
};

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.text = action.payload.text;
    },
  },
});

export const loadingReducer = slice.reducer;
export const loadingActions = slice.actions;
