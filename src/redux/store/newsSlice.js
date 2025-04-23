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
  feature:[],
  loading: false,
  error: null
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false
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

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   world: [],
//   local: []
// };

// const newsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {
//     setWorld: (state, action) => {
//       state.world = action.payload;
//     },
//     setLocal: (state, action) => {
//       state.local = action.payload;
//     }
//   }
// });

// export const { setWorld, setLocal } = newsSlice.actions;
// export default newsSlice.reducer;
