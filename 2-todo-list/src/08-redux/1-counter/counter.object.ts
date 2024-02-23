const INITIAL_VALUE = 0;
const DEFAULT_INCREMENT = 1;

export const counter = {
  value: INITIAL_VALUE,

  increment(amount: number = DEFAULT_INCREMENT) {
    this.value += amount;
  },

  reset() {
    this.value = INITIAL_VALUE;
  },
};
