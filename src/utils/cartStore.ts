import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const cartStore = configureStore({
  reducer: {
    cart: cartSlice
  }
});

export default cartStore;

export type RootState = ReturnType<typeof cartStore.getState>;

export type AppDispatch = typeof cartStore.dispatch;
