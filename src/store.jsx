// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './features/featureSlice';
import filterReducer from './features/filterSlice';
export const store = configureStore({
  reducer: {
    feature: featureReducer,
    filter: filterReducer,
  },
});
