import { createSlice } from "@reduxjs/toolkit";
import { AuthActions } from "./auth";

const initialState = {
  isDisplay: false,
  productDetail: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup(state) {
      state.isDisplay = true;
    },
    hidePopup(state) {
      state.isDisplay = false;
    },
    setCurrentProduct(state, action) {
      state.productDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthActions.onLogout, () => {
      return initialState;
    });
  },
});

export default popupSlice.reducer;

export const PopupActions = popupSlice.actions;
