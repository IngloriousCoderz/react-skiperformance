import { createSlice } from "@reduxjs/toolkit";

import { TTask } from "../store/types.d";

import { addTask } from "../store/action-creators";

const MIN_ID = 0;
const LAST_ITEM = 1;
const INCREMENT = 1;
const ITEMS_TO_DELETE = 1;

const INITIAL_STATE: TTask[] = [];

const slice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCompleted: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].isCompleted = !state[index].isCompleted;
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, ITEMS_TO_DELETE);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action) => {
      const maxId: number = state.length
        ? state[state.length - LAST_ITEM].id
        : MIN_ID;
      const newTask: TTask = {
        id: maxId + INCREMENT,
        text: action.payload as string,
      };
      state.push(newTask);
    });
  },
});

export default slice.reducer;
export const { toggleCompleted, removeTask } = slice.actions;
