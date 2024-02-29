import { createSlice } from "@reduxjs/toolkit";

import { TTask } from "../store/types.d";

import {
  addTask,
  fetchTasks,
  removeTask,
  toggleCompleted,
} from "../store/thunks";

const INITIAL_STATE: TTask[] = [];

const slice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (_, action) => action.payload)
      .addCase(addTask.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        return state.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export default slice.reducer;
