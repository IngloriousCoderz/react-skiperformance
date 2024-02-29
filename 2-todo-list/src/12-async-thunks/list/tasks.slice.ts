import { createSlice } from "@reduxjs/toolkit";

import { TTask } from "../store/types.d";

import { addTask } from "../store/thunks";

const INITIAL_STATE: TTask[] = [];

const slice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {
    replaceTasks: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(addTask.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default slice.reducer;
export const { replaceTasks } = slice.actions;
