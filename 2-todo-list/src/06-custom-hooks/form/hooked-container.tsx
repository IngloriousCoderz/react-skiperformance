import { memo } from "react";
import { useForm } from "./use-form";

import FormComponent from "./form";

type TProps = {
  onSubmit: (text: string) => void;
};

export default memo(function Form({ onSubmit }: TProps) {
  const { text, handleChange, handleSubmit } = useForm(onSubmit);

  // console.log("form rendering");
  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
});
