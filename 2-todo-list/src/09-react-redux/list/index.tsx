import { useDispatch, useSelector } from "react-redux";
import ListComponent from "./list";
import { selectTasks } from "../store/selectors";
import { removeTask, toggleCompleted } from "../store/action-creators";

export default function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleSpanClick = (id: number) => dispatch(toggleCompleted(id));
  const handleButtonClick = (id: number) => dispatch(removeTask(id));

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  );
}
