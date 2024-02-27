import { configureStore } from "@reduxjs/toolkit";
import {
  addTask,
  changeText,
  removeTask,
  toggleCompleted,
} from "./action-creators";
// import todoList from "./todo-list";

import text from "./text";
import tasks from "./tasks";

// function createStore(rootReducer) {
//   const subscribers = [];
//   let state;

//   const store = {
//     dispatch(action) {
//       state = rootReducer(state, action);
//       subscribers.forEach((subscriber) => {
//         subscriber();
//       });
//     },

//     subscribe(subscriber) {
//       subscribers.push(subscriber);
//     },

//     getState() {
//       return state;
//     },
//   };

//   store.dispatch({ type: "redux/@@INIT" });

//   return store;
// }

// const store = createStore(todoList);

const store = configureStore({ reducer: { text, tasks } });

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(changeText("Some text"));
store.dispatch(addTask("Some text"));
store.dispatch(toggleCompleted(1));
store.dispatch(removeTask(1));
