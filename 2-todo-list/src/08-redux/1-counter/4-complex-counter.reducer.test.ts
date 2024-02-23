import { test, expect } from "vitest";

import counter, {
  increment,
  reset,
  selectValue,
} from "./4-complex-counter.reducer";

test("it should increment by 1", () => {
  // given
  const stateBefore = { value: 0 };
  const action = increment();
  const stateAfter = { value: 1 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should increment by a given amount", () => {
  // given
  const stateBefore = { value: 0 };
  const action = increment(5);
  const stateAfter = { value: 5 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should reset", () => {
  // given
  const stateBefore = { value: 7 };
  const action = reset();
  const stateAfter = { value: 0 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should ignore any other action", () => {
  // given
  const stateBefore = { value: 2 };
  const action = { type: "make coffee" };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateBefore);
});

test("it should initialize the state", () => {
  // given
  const stateBefore = undefined;
  const action = { type: "make coffee" };
  const stateAfter = { value: 0 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should select the value", () => {
  // given
  const state = { value: 4 };
  const expectedValue = 4;

  // when
  const value = selectValue(state);

  // then
  expect(value).toBe(expectedValue);
});
