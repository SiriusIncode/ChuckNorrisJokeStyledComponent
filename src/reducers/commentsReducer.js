import { createSlice } from "@reduxjs/toolkit";

export const comentsReducer = createSlice({
  name: "comments",
  initialState: {
    value: [],
  },
  reducers: {
    setComments: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setComments } = comentsReducer.actions;
export default comentsReducer.reducer;
