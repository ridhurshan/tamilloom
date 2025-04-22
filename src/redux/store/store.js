import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import newsReducer from './newsSlice.js'; 

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    news: newsReducer
  }
});



