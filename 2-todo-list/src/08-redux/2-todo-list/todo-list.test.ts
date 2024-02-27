import { test, expect } from "vitest";

import todoList, {
  changeText,
  addTask,
  toggleCompleted,
  removeTask,
} from "./todo-list";

test("it should change the input field text", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: false },
      { id: 3, text: "Fall asleep" },
    ],
  };
  const action = changeText("Some other text"); // { type: "form/changeText", payload: "Some other text" };
  const stateAfter = {
    text: "Some other text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: false },
      { id: 3, text: "Fall asleep" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should add a new task and empty the input field", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: false },
      { id: 3, text: "Fall asleep" },
    ],
  };
  const action = addTask("New task");
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: false },
      { id: 3, text: "Fall asleep" },
      { id: 4, text: "New task" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should toggle the 'isCompleted' property on a task given its id", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: false },
      { id: 3, text: "Fall asleep" },
    ],
  };
  const action = toggleCompleted(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: true },
      { id: 3, text: "Fall asleep" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should remove a task given its id", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 2, text: "Have lunch", isCompleted: false },
      { id: 3, text: "Fall asleep" },
    ],
  };
  const action = removeTask(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", isCompleted: true },
      { id: 3, text: "Fall asleep" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});
