import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import basketReducer from '../features/basketSlice';
import detailReducer from '../features/detailSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    detail:detailReducer,
  },
});
