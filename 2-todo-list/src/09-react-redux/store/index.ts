import { configureStore } from "@reduxjs/toolkit";

import text from "./text";
import tasks from "./tasks";

export const store = configureStore({ reducer: { text, tasks } });
