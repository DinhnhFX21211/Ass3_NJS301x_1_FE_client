import { createSlice } from "@reduxjs/toolkit";

import { AuthAPI } from "../apis/authAPIs";

const getCurrentUser = async () => {
  const res = await AuthAPI.getCurrentUser();
  if (res?.status === 200) {
    return res.data;
  }
};

const initialState = {
  isAuthenticated: false,
  currentUser: (await getCurrentUser()) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    onLogout(state, action) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export default authSlice.reducer;

export const AuthActions = authSlice.actions;
