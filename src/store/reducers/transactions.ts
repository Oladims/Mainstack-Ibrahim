import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from 'models/transaction';

const transactionsReducer = createSlice({
  name: 'transactions',
  initialState: { data: [] as Array<Transaction> },
  reducers: {
    push(state, action: PayloadAction<Transaction[]>) {
      state.data = [...action.payload];
    },
  },
});

export default transactionsReducer.reducer;
export const transactionsActions = transactionsReducer.actions;
