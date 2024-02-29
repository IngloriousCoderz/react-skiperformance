import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "../store/action-creators";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    changeText: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, () => "");
  },
});

export default slice.reducer;
export const { changeText } = slice.actions;
