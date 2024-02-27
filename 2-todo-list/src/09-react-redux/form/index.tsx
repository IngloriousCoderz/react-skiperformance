import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormComponent from "./form";
import { selectText } from "../store/selectors";
import { addTask, changeText } from "../store/action-creators";

// Container Component

export default function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeText(event.target.value));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addTask(text));
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
