import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import newsReducer from './newsSlice.js'; 
import searchResultsReducer from './searchResults.js'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    news: newsReducer,
    searchResults:searchResultsReducer,
  }
});



