import { FormEvent, useState } from "react";
import clsx from "clsx";
import classes from "./style.module.scss";

type TProps = {
  name?: string | null;
};

type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // clone
    // setTasks((tasks) => {
    //   const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
    //   const newTask = { id: maxId + 1, text: "New task" };
    //   const clone = [...tasks];
    //   clone.push(newTask);
    //   return clone;
    // });

    // sandwich
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - LAST_ITEM].id : MIN_ID;
      const newTask = { id: maxId + INCREMENT, text: "New task" };
      return [...tasks, newTask];
    });
  };

  const handleButtonClick = (id: number) => {
    // clone
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   clone.splice(index, 1);
    //   return clone;
    // });

    // sandwich
    // setTasks((tasks) => [...tasks.slice(0, index), ...tasks.slice(index + 1)]);

    // array method
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleSpanClick = (id: number) => {
    // clone
    // setTasks(tasks => {
    //   const clonedTask = { ...tasks[index] };
    //   const clone = [...tasks];
    //   clonedTask.isCompleted = !clonedTask.isCompleted;
    //   clone[index] = clonedTask;
    //   return clone
    // })

    // sandwich
    // setTasks((tasks) => [
    //   ...tasks.slice(0, index),
    //   { ...tasks[index], isCompleted: !tasks[index].isCompleted },
    //   ...tasks.slice(index + 1),
    // ]);

    // array method
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, isCompleted }) => (
          <li key={id}>
            <span
              className={clsx({ [classes.completed]: isCompleted })}
              onClick={() => handleSpanClick(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleButtonClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
