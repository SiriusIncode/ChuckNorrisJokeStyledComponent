import { createSlice } from "@reduxjs/toolkit";

export const nameReducer = createSlice({
  name: "name",
  initialState: {
    value: "",
  },
  reducers: {
    setName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setName } = nameReducer.actions;
export default nameReducer.reducer;