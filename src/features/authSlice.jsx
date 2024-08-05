import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  account: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.account = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.account = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
