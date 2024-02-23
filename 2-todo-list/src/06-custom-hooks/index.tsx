import { useState, useCallback } from "react";
import List from "./list";
import type { Task } from "./task";
import Form from "./form";

type TProps = {
  name?: string | null;
};

const MIN_ID = 0;
const LAST_ITEM = 1;
const INCREMENT = 1;

const INITIAL_TASKS: Task[] = [
  { id: 1, text: "Learn React", isCompleted: true },
  { id: 2, text: "Eat pizza", isCompleted: false },
  { id: 3, text: "Fall asleep" },
];

export default function TodoList({ name }: TProps) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

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
