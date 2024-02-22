import { ChangeEvent, FormEvent, useState } from "react";
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
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - LAST_ITEM].id : MIN_ID;
      const newTask = { id: maxId + INCREMENT, text };
      return [...tasks, newTask];
    });

    setText("");
  };

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
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What next?"
          autoFocus
          value={text}
          onChange={handleChange}
        />
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
