import { test, expect } from "vitest";

import counter, { increment, reset } from "./3-counter.reducer";

test("it should increment by 1", () => {
  // given
  const stateBefore = 0;
  const action = increment();
  const stateAfter = 1;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

test("it should increment by a given amount", () => {
  // given
  const stateBefore = 0;
  const action = increment(5);
  const stateAfter = 5;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

test("it should reset", () => {
  // given
  const stateBefore = 7;
  const action = reset();
  const stateAfter = 0;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

test("it should ignore any other action", () => {
  // given
  const stateBefore = 2;
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
  const stateAfter = 0;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});
