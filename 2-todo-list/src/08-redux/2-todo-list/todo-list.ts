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

const INITIAL_STATE: TState = {
  text: "",
  tasks: [],
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

export default function todoList(
  state: TState = INITIAL_STATE,
  action: TAction
): TState {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: action.payload as string };

    case ADD_TASK: {
      const { tasks } = state;
      const maxId: number = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : MIN_ID;
      const newTask: TTask = {
        id: maxId + INCREMENT,
        text: action.payload as string,
      };
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

export const selectText = (state: TState): string => state.text;

export const selectTasks = (state: TState): TTask[] => state.tasks;

export const selectTask = (state: TState, id: number): TTask | undefined =>
  state.tasks.find((task) => task.id === id);

// const state = {
//   firstName: "Matteo Antony",
//   lastName: "Mistretta",
// };

// const selectFirstName = (state) => state.firstName;
// const selectLastName = (state) => state.lastName;

// // const selectFullName = (state) => `${state.firstName} ${state.lastName}`;

// const selectFullName = createSelector(
//   selectFirstName, selectLastName,
//   (firstName, lastName) => `${firstName} ${lastName}`;
// )

// const selectTask = createSelector(
//   selectTasks,
//   (state, id) => id,
//   (tasks, id) => tasks.find((task) => task.id === id);
// )
