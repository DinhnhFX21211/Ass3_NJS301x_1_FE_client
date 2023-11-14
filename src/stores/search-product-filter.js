import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "",
  category: "",
  page: 1,
  totalPage: 0,
};

const filterSearchSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    setFilterName(state, action) {
      state.productName = action.payload;
    },
    setFilterCategory(state, action) {
      state.category = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    setTotalPage(state, action) {
      state.totalPage = action.payload;
    },
  },
});

export default filterSearchSlice.reducer;

export const FilterSearchActions = filterSearchSlice.actions;
