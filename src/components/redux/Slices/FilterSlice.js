import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: 'ffffff',
  filter: {
    // reducers:{  => ?????
    filter(state, action) {
      return state + action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
