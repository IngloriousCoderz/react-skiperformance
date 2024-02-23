import { useForm } from "./use-form";

export type TProps = {
  onSubmit: (text: string) => void;
};

export default function Form({ onSubmit }: TProps) {
  const { text, handleChange, handleSubmit } = useForm(onSubmit);

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
}
