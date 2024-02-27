import { Provider } from "react-redux";

import Form from "./form";
import List from "./list";

import { store } from "./store";

type TProps = {
  name?: string | null;
};

export default function TodoList({ name }: TProps) {
  return (
    <Provider store={store}>
      <h1>{name}'s Todo List</h1>
      <Form />
      <List />
    </Provider>
  );
}
