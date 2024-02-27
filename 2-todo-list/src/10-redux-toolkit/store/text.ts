import { createReducer } from "@reduxjs/toolkit";

import { addTask, changeText } from "./action-creators";

export default createReducer<string>("", (builder) => {
  builder
    .addCase(changeText, (_, action) => action.payload)
    .addCase(addTask, () => "");
});

// export default createReducer("", {
//   [changeText.type]: (_, action) => action.payload,

//   [addTask.type]: () => "",
// });
