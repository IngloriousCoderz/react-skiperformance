import { ChangeEvent, FormEvent } from "react";

import FormComponent from "./form";

// Container Component

export default function Form() {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
