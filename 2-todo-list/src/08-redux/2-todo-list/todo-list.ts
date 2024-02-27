const CHANGE_TEXT = "form/changeText";
const ADD_TASK = "list/addTask";
const TOGGLE_COMPLETED = "list/toggleCompleted";
const REMOVE_TASK = "list/removeTask";

const MIN_ID = 0;
const LAST_ITEM = 1;
const INCREMENT = 1;

type TTask = {
  id: number;
  text: string;
  isCompleted?: boolean;
};

type TState = {
  text: string;
  tasks: TTask[];
};

type TAction = {
  type: string;
  payload?: string | number;
};

export const changeText = (text: string): TAction => ({
  type: CHANGE_TEXT,
  payload: text,
});

export const addTask = (text: string): TAction => ({
  type: ADD_TASK,
  payload: text,
});

export const toggleCompleted = (id: number): TAction => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});

export const removeTask = (id: number): TAction => ({
  type: REMOVE_TASK,
  payload: id,
});

export default function todoList(state: TState, action: TAction): TState {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: action.payload as string };

    case ADD_TASK: {
      const { tasks } = state;
      const maxId: number = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : MIN_ID;
      const newTask: TTask = { id: maxId + INCREMENT, text: "New task" };
      return { text: "", tasks: [...tasks, newTask] };
    }

    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
}
