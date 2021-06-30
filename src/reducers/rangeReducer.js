import { createSlice } from "@reduxjs/toolkit";

export const rangeReducer = createSlice({
  name: "range",
  initialState: {
    value: 10
  },
  reducers: {
    setRange: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setRange } = rangeReducer.actions;
export default rangeReducer.reducer;