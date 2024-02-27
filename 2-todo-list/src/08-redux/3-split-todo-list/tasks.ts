import { TAction, TTask } from "./types.d";

import { ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETED } from "./action-types";

const MIN_ID = 0;
const LAST_ITEM = 1;
const INCREMENT = 1;

export default function tasks(state: TTask[] = [], action: TAction): TTask[] {
  switch (action.type) {
    case ADD_TASK: {
      const maxId: number = state.length
        ? state[state.length - LAST_ITEM].id
        : MIN_ID;
      const newTask: TTask = {
        id: maxId + INCREMENT,
        text: action.payload as string,
      };
      return [...state, newTask];
    }

    case TOGGLE_COMPLETED:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

    case REMOVE_TASK:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
}
