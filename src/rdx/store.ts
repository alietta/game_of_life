import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer';

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
});

