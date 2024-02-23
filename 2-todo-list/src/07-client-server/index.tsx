import { useState, useCallback, useEffect } from "react";
import List from "./list";
import type { Task } from "../types/task";

import Form from "./form";
import * as api from "../services/api";

type TProps = {
  name?: string | null;
};

const INITIAL_TASKS: Task[] = [];

export default function TodoList({ name }: TProps) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  // promise-based
  // useEffect(() => {
  //   api.retrieveTasks().then(setTasks);
  // }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const tasks = await api.retrieveTasks();
    setTasks(tasks);
  }

  // promise-based
  // const handleSubmit = useCallback((text: string) => {
  //   api.createTask({ text }).then(fetchTasks);
  // }, []);

  const handleSubmit = useCallback(async (text: string) => {
    const newTask = await api.createTask({ text });
    setTasks((tasks) => [...tasks, newTask]);
  }, []);

  const handleButtonClick = async (id: number) => {
    await api.deleteTask(id);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleSpanClick = async (id: number) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      return;
    }

    const updatedTask = await api.updateTask(id, {
      isCompleted: !task.isCompleted,
    });

    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}
