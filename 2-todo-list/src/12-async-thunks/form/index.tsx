import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormComponent from "./form";
import { selectText } from "../store/selectors";
import { changeText } from "./text.slice";

import { addTask } from "../store/thunks";
import { UnknownAction } from "@reduxjs/toolkit";

// Container Component

export default function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeText(event.target.value));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(addTask(text) as unknown as UnknownAction);
  };

  // console.log("form rendering");
  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
