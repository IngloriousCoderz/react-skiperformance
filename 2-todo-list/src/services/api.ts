import axios from "axios";

import type { Task } from "../types/task";

// Omit | Pick | Partial | Required | ...

const http = axios.create({ baseURL: `${import.meta.env.VITE_API_URL}/tasks` });

export async function retrieveTasks() {
  const { data } = await http.get("");
  return data;
}

export async function createTask(task: Omit<Task, "id">) {
  const { data } = await http.post("", task);
  return data;
}

export async function updateTask(id: number, diff: Partial<Task>) {
  const { data } = await http.patch(`/${id}`, diff);
  return data;
}

export async function deleteTask(id: number) {
  const { data } = await http.delete(`/${id}`);
  return data;
}
