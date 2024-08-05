import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  account: null, // Initial state for your account
};

const profileSlice = createSlice({
  name: 'profileslice',
  initialState,
  reducers: {
    showAccount(state, action) {
      state.account = action.payload;
    },
    clearAccount(state) {
      state.account = null;
    },
  },
});

export const { showAccount, clearAccount } = profileSlice.actions;

export default profileSlice.reducer;
