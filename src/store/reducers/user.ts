import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

const userReducer = createSlice({
  name: 'user',
  initialState: { data: {} as User },
  reducers: {
    push(state, action: PayloadAction<User>) {
      state.data = { ...action.payload };
    },
  },
});

export default userReducer.reducer;
export const userActions = userReducer.actions;
