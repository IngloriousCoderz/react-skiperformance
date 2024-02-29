import { TTask, TState } from "./types";

export const selectText = (state: TState): string => state.text;

export const selectTasks = (state: TState): TTask[] => state.tasks;

export const selectTask = (state: TState, id: number): TTask | undefined =>
  state.tasks.find((task) => task.id === id);
