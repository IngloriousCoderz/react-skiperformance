import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListComponent from "./list";
import { replaceTasks } from "./tasks.slice";
import { selectTasks } from "../store/selectors";

import * as api from "../../services/api";

export default function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchTasks() {
    const tasks = await api.retrieveTasks();
    dispatch(replaceTasks(tasks));
  }

  const handleSpanClick = async (id: number) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      return;
    }

    const updatedTask = await api.updateTask(id, {
      isCompleted: !task.isCompleted,
    });

    dispatch(
      replaceTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
    );
  };

  const handleButtonClick = async (id: number) => {
    await api.deleteTask(id);
    dispatch(replaceTasks(tasks.filter((task) => task.id !== id)));
  };

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  );
}
