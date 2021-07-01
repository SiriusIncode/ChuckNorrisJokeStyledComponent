import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import loadComments from "../services/comentService";
import statuses from "../statuses";
import { toast } from "react-toastify";
import generateRandomColor from "../helpers";

export const getComments = createAsyncThunk("comments/getComments", () => {
  return loadComments();
});

export const comentsReducer = createSlice({
  name: "comments",
  initialState: {
    value: [],
    status: statuses.loading,
    error: null,
  },
  reducers: {
    addComment: (state, action) => {
      const { time, comment, name } = action.payload;
      state.value.unshift({
        time,
        body: comment,
        icoColor: generateRandomColor(),
        name,
        id: nanoid(),
      });
    },
  },
  extraReducers: {
    [getComments.pending]: (state) => {
      state.status = statuses.loading;
    },
    [getComments.fulfilled]: (state, action) => {
      state.value = action.payload.map((comment) => ({
        ...comment,
        icoColor: generateRandomColor(),
      }));
      state.status = statuses.succeeded;
    },
    [getComments.rejected]: (state, action) => {
      state.status = statuses.failed;
      state.error = action.error.message;
      toast.error(`Comments loading failed: ${action.error.message}`);
    },
  },
});

export const { addComment } = comentsReducer.actions;
export default comentsReducer.reducer;
