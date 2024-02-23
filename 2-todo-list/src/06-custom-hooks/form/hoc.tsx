import { ChangeEvent, FormEvent, memo, useState } from "react";

import { TProps as DecoratedTProps } from "./form";

type TProps = {
  onSubmit: (text: string) => void;
};

// Higher-Order Component

export default function createForm(
  Component: React.FunctionComponent<DecoratedTProps>
) {
  return memo(function Form({ onSubmit }: TProps) {
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
      <Component text={text} onChange={handleChange} onSubmit={handleSubmit} />
    );
  });
}
