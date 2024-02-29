"use client";

import clsx from "clsx";

import classes from "./style.module.scss";

import { TTask } from "../types.d";

type TProps = {
  tasks: TTask[];
  // onSpanClick: (id: number) => void;
  // onButtonClick: (id: number) => void;
};

export default function List({ tasks }: TProps) {
  const handleSpanClick = (id: number) => {};

  const handleButtonClick = (id: number) => {};

  // console.log("list rendering");
  return (
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
  );
}
