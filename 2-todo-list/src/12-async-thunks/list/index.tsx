import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListComponent from "./list";
import { selectTasks } from "../store/selectors";

import { fetchTasks, removeTask, toggleCompleted } from "../store/thunks";
import { UnknownAction } from "@reduxjs/toolkit";

export default function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks() as unknown as UnknownAction);
  }, [dispatch]);

  const handleSpanClick = async (id: number) =>
    dispatch(toggleCompleted(id) as unknown as UnknownAction);

  const handleButtonClick = (id: number) =>
    dispatch(removeTask(id) as unknown as UnknownAction);

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  );
}
