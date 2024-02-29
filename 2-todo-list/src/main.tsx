import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./01-default-app/App.tsx";
// import "./index.css";

// import { TodoList as App } from "./02-static-app";
import App from "./11-slices";

// import "./08-redux/3-split-todo-list";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // React.createElement(React.StrictMode, {}, [React.createElement(App)])
  <React.StrictMode>
    <App name="Matteo" />
  </React.StrictMode>
);
