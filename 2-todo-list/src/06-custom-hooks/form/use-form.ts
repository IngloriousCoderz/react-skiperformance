import { ChangeEvent, FormEvent, useState } from "react";

export function useForm(onSubmit: (text: string) => void) {
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return { text, handleChange, handleSubmit };
}
