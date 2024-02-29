import { ChangeEvent, FormEvent, memo, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
});
