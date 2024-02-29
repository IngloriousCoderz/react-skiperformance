import clsx from "clsx";

import { TTask } from "../store/types.d";

import classes from "./style.module.scss";

type TProps = {
  tasks: TTask[];
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
