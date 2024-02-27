import {
  ADD_TASK,
  CHANGE_TEXT,
  REMOVE_TASK,
  TOGGLE_COMPLETED,
} from "./action-types";

import { TAction } from "./types.d";

export const changeText = (text: string): TAction => ({
  type: CHANGE_TEXT,
  payload: text,
});

export const addTask = (text: string): TAction => ({
  type: ADD_TASK,
  payload: text,
});

export const toggleCompleted = (id: number): TAction => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});

export const removeTask = (id: number): TAction => ({
  type: REMOVE_TASK,
  payload: id,
});
