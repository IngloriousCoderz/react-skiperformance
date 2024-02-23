import { ChangeEvent, FormEvent, memo, useState } from "react";
import FormComponent from "./form";

type TProps = {
  onSubmit: (text: string) => void;
};

// memo: Higher-Order Component

export default memo(function Form({ onSubmit }: TProps) {
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  // console.log("form rendering");
  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
});
