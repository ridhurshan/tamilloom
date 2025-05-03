import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  world: [],
  local: [],
  business: [],
  technology: [],
  health: [],
  events: [],
  sports: [],
  cinema: [],
  feature: [],
  ad: [],
  // mydate:[],
  loading: false,
  error: null
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      // Update all categories and reset loading/error
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setNewsData, setLoading, setError } = newsSlice.actions;
export default newsSlice.reducer;