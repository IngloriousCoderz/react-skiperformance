import { useState, useCallback, useEffect } from "react";
import List from "./list";
import type { Task } from "../types/task";

import Form from "./form";
import * as api from "../services/api";

type TProps = {
  name?: string | null;
};

const MIN_ID = 0;
const LAST_ITEM = 1;
const INCREMENT = 1;

const INITIAL_TASKS: Task[] = [];

export default function TodoList({ name }: TProps) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  useEffect(() => {
    api.retrieveTasks().then(setTasks);
  }, []);

  const handleSubmit = useCallback(
    (text: string) =>
      setTasks((tasks) => {
        const maxId = tasks.length
          ? tasks[tasks.length - LAST_ITEM].id
          : MIN_ID;
        const newTask = { id: maxId + INCREMENT, text };
        return [...tasks, newTask];
      }),
    []
  );

  const handleButtonClick = (id: number) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  const handleSpanClick = (id: number) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );

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
