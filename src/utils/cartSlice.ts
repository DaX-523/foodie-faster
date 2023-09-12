import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './cartStore';

interface StateType {
  items: any[];
}

const initialState: StateType = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const State = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
