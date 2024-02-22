import { ChangeEvent, FormEvent } from "react";

type TProps = {
  text: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
};

export default function Form({ text, onChange, onSubmit }: TProps) {
  console.log("form rendering");
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
}
