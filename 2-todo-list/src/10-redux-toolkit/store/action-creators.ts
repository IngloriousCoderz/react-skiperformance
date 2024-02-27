import { createAction } from "@reduxjs/toolkit";

export const changeText = createAction<string>("form/changeText");
export const addTask = createAction<string>("list/addTask");
export const toggleCompleted = createAction<number>("list/toggleCompleted");
export const removeTask = createAction<number>("list/removeTask");
