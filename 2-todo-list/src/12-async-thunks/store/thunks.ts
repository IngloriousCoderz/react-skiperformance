import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";
import { TTask } from "./types.d";

export const addTask = createAsyncThunk(
  "thunk/addTask",
  async (text: string) => {
    const newTask: TTask = await api.createTask({ text });
    return newTask;
  }
);
