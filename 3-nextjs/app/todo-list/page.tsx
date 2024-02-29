import { TTask } from "./types";
import List from "./list";

export default async function TodoList() {
  const response = await fetch("http://localhost:3001/tasks");
  const tasks: TTask[] = await response.json();

  return (
    <div>
      <h1>Todo List</h1>
      <List tasks={tasks} />
    </div>
  );
}
