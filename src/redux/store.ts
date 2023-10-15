import { configureStore } from '@reduxjs/toolkit';
import { imagesSlice } from '@/redux/images/reducer';

export const store = configureStore({
  reducer: {
    [imagesSlice.name]: imagesSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
