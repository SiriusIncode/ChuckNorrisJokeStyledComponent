import { createSlice } from "@reduxjs/toolkit";

export const commentReducer = createSlice({
  name: "comment",
  initialState: {
    value: ""
  },
  reducers: {
    setComment: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setComment } = commentReducer.actions;
export default commentReducer.reducer;
