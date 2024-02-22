import React from "react";
import ReactDOM from "react-dom/client";
import App from "./01-default-app/App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // React.createElement(React.StrictMode, {}, [React.createElement(App)])
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
