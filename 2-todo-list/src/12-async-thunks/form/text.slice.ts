import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "../store/thunks";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    changeText: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(addTask.pending, () => "");
  },
});

export default slice.reducer;
export const { changeText } = slice.actions;
