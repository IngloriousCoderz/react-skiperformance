import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";
import { TState, TTask } from "./types.d";
import { selectTasks } from "./selectors";

export const fetchTasks = createAsyncThunk("thunk/fetchTasks", () =>
  api.retrieveTasks()
);

export const addTask = createAsyncThunk(
  "thunk/addTask",
  async (text: string) => {
    const newTask: TTask = await api.createTask({ text });
    return newTask;
  }
);

export const toggleCompleted = createAsyncThunk(
  "thunk/toggleCompleted",
  async (id: number, { getState }) => {
    const tasks = selectTasks(getState() as TState);

    const task = tasks.find((task) => task.id === id);
    if (!task) {
      return;
    }

    const updatedTask = await api.updateTask(id, {
      isCompleted: !task.isCompleted,
    });

    return updatedTask;
  }
);

export const removeTask = createAsyncThunk(
  "thunk/removeTask",
  async (id: number) => {
    await api.deleteTask(id);
    return id;
  }
);
