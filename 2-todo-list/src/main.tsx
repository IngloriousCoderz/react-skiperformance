import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./01-default-app/App.tsx";
// import "./index.css";

// import { TodoList as App } from "./02-static-app";
import App from "./07-client-server";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // React.createElement(React.StrictMode, {}, [React.createElement(App)])
  <React.StrictMode>
    <App name="Matteo" />
  </React.StrictMode>
);
