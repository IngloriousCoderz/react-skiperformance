import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    changeText: (_, action) => action.payload,
  },
});

export default slice.reducer;
export const { changeText } = slice.actions;
