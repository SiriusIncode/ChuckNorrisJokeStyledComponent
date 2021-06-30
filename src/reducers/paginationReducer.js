import { createSlice } from "@reduxjs/toolkit";

export const paginationNumeringSlice = createSlice({
  name: "page",
  initialState: {
    value: 1
  },
  reducers: {
    changePage: (state, action) => {
      state.value = action.payload.pageNumber;
    }
  }
});

export const { changePage } = paginationNumeringSlice.actions;
export default paginationNumeringSlice.reducer;