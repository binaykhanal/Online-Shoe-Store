import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isLoginView: true, // To toggle between login and signup views
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer(state) {
      state.isOpen = true;
    },
    closeDrawer(state) {
      state.isOpen = false;
    },
    setLoginView(state, action) {
      state.isLoginView = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, setLoginView } = drawerSlice.actions;
export const drawerReducer=drawerSlice.reducer;
