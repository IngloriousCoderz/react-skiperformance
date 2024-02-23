const INITIAL_STATE = 0;
const DEFAULT_INCREMENT = 1;

type TAction = {
  type: string;
  payload?: number;
};

// action types
const INCREMENT = "increment";
const RESET = "reset";

// action creators
export const increment = (amount?: number) => ({
  type: INCREMENT,
  payload: amount,
});
export const reset = () => ({ type: RESET });

// reducer
export default function counter(
  state: number = INITIAL_STATE,
  action: TAction
) {
  switch (action.type) {
    case INCREMENT:
      return state + (action.payload ?? DEFAULT_INCREMENT);

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}

// const actions = [increment(2), increment(3), reset(), increment()]
// const state = actions.reduce(counter, 0)
