import { ChangeEvent, FormEvent } from "react";

export type TProps = {
  text: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

// Presentational component

export default function Form({ text, onChange, onSubmit }: TProps) {
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
