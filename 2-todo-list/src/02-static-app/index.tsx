import classes from "./style.module.scss";
import clsx from "clsx";

type TProps = {
  name?: string | null;
};

export default function TodoList({ name }: TProps) {
  const style = {
    display: "initial", // HACK: this pleases the Gods of static typing
    "--color": name === "Antony" ? "purple" : "blue",
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form>
        <input placeholder="What next?" autoFocus />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span
            className={clsx("task", { [classes.completed]: true })}
            style={style}
          >
            Learn React
          </span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Eat pizza</span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Fall asleep</span>
          &nbsp;
          <button>x</button>
        </li>
      </ul>
    </>
  );
}
