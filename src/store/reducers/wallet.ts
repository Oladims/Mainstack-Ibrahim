import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Wallet } from 'models/wallet';

const walletReducer = createSlice({
  name: 'wallet',
  initialState: { data: {} as Wallet },
  reducers: {
    push(state, action: PayloadAction<Wallet>) {
      state.data = { ...action.payload };
    },
  },
});

export default walletReducer.reducer;
export const walletActions = walletReducer.actions;
