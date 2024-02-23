const INITIAL_STATE = { value: 0 };
const DEFAULT_INCREMENT = 1;

type TState = {
  value: number;
};

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
  state: TState = INITIAL_STATE,
  action: TAction
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + (action.payload ?? DEFAULT_INCREMENT),
      };

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}

// selector
export const selectValue = (state: TState) => state.value;
