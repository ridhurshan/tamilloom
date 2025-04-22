import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  world: [],
  local: []
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setWorld: (state, action) => {
      state.world = action.payload;
    },
    setLocal: (state, action) => {
      state.local = action.payload;
    }
  }
});

export const { setWorld, setLocal } = newsSlice.actions;
export default newsSlice.reducer;
