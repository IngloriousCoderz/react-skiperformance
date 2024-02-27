import { TTask } from "./types.d";

import { addTask, removeTask, toggleCompleted } from "./action-creators";
import { createReducer } from "@reduxjs/toolkit";

const MIN_ID = 0;
const LAST_ITEM = 1;
const INCREMENT = 1;
const ITEMS_TO_DELETE = 1;

export default createReducer<TTask[]>([], (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      const maxId: number = state.length
        ? state[state.length - LAST_ITEM].id
        : MIN_ID;
      const newTask: TTask = {
        id: maxId + INCREMENT,
        text: action.payload as string,
      };
      state.push(newTask);
    })
    .addCase(toggleCompleted, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].isCompleted = !state[index].isCompleted;
    })
    .addCase(removeTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, ITEMS_TO_DELETE);
    });
});
