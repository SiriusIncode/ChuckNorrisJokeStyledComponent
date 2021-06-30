import { createSlice } from "@reduxjs/toolkit";

export const loadedReducer = createSlice({
  name: "loaded",
  initialState: {
    value: false,
  },
  reducers: {
    setLoaded: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoaded } = loadedReducer.actions;
export default loadedReducer.reducer;