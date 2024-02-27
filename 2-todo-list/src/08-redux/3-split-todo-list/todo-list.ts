import { combineReducers } from "@reduxjs/toolkit";

import { TTask, TState } from "./types.d";

import text from "./text";
import tasks from "./tasks";

// const INITIAL_STATE: TState = {
//   text: "",
//   tasks: [],
// };

// const combineReducers =
//   (reducers) =>
//   (state = {}, action) =>
//     Object.entries(reducers).reduce((acc, [key, value]) => {
//       acc[key] = value(state[key], action);
//       return acc;
//     }, {});

export default combineReducers({ text, tasks });

// export default function todoList(
//   state: TState = INITIAL_STATE,
//   action: TAction
// ): TState {
//   return {
//     text: text(state.text, action),
//     tasks: tasks(state.tasks, action),
//   };
// }

export const selectText = (state: TState): string => state.text;

export const selectTasks = (state: TState): TTask[] => state.tasks;

export const selectTask = (state: TState, id: number): TTask | undefined =>
  state.tasks.find((task) => task.id === id);
