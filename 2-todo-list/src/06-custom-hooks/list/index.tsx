import clsx from "clsx";

import classes from "./style.module.scss";

import type { Task } from "../task";

type TProps = {
  tasks: Task[];
  onSpanClick: (id: number) => void;
  onButtonClick: (id: number) => void;
};

export default function List({ tasks, onSpanClick, onButtonClick }: TProps) {
  // console.log("list rendering");
  return (
    <ul>
      {tasks.map(({ id, text, isCompleted }) => (
        <li key={id}>
          <span
            className={clsx({ [classes.completed]: isCompleted })}
            onClick={() => onSpanClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onButtonClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
