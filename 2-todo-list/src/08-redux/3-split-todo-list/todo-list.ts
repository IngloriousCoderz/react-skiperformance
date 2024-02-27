import {
  CHANGE_TEXT,
  ADD_TASK,
  TOGGLE_COMPLETED,
  REMOVE_TASK,
} from "./action-types";

import { TTask, TState, TAction } from "./types.d";

import { changeText } from "./action-creators";

import text from "./text";
import tasks from "./tasks";

const INITIAL_STATE: TState = {
  text: "",
  tasks: [],
};

export default function todoList(
  state: TState = INITIAL_STATE,
  action: TAction
): TState {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: text(state.text, action) };

    case ADD_TASK:
      return {
        text: text(state.text, changeText("")),
        tasks: tasks(state.tasks, action),
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
}

export const selectText = (state: TState): string => state.text;

export const selectTasks = (state: TState): TTask[] => state.tasks;

export const selectTask = (state: TState, id: number): TTask | undefined =>
  state.tasks.find((task) => task.id === id);
