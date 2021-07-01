import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loadJoke from '../services/jokeService';
import statuses from "../statuses";
import { toast } from "react-toastify";

export const getJoke = createAsyncThunk('joke/getJoke', () => {
  const response = loadJoke();

  return response;
});

export const jokeReducer = createSlice({
  name: "joke",
  initialState: {
    value: {},
    status: statuses.loading, 
    error: null
  },
  extraReducers: {
    [getJoke.pending]: (state) => {
      state.status = statuses.loading;
    },
    [getJoke.fulfilled]: (state, action) => {
      state.status = statuses.succeeded;
      state.value = action.payload;

    },
    [getJoke.rejected]: (state, action) => {
      state.status = statuses.failed;
      state.error = action.error.message; 
      toast.error(`Joke loading failed: ${action.error.message}`);

    } 
  }
});

export default jokeReducer.reducer;
