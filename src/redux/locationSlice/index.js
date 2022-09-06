import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  selectLocation: null,
  myCurrentLocation: null,
};

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    saveLocation: (state, action) => {
      state.data.push(action.payload);
    },
    setSelectLocation: (state, action) => {
      state.selectLocation = action.payload;
    },
    setMyCurrentLocation: (state, action) => {
      state.myCurrentLocation = action.payload;
    },
  },
});

export const locationReducer = slice.reducer;
export const locationActions = slice.actions;
export const locationSelector = state => state.location;
