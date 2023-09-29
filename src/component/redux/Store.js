
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Myslice'; 

export const store = configureStore({
  reducer: {
    alldata: todoReducer, 
  },
});

