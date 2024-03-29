import { ADD_TASK, CHANGE_TEXT } from "./action-types";
import { TAction } from "./types.d";

export default function text(state: string = "", action: TAction): string {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.payload as string;

    case ADD_TASK:
      return "";

    default:
      return state;
  }
}
