import { test, expect } from "vitest";

import { increment } from "./counter.reducer";

test("it should increment by 1", () => {
  // given
  const stateBefore = 0;
  const stateAfter = 1;

  // when
  const state = increment(stateBefore);

  // then
  expect(state).toBe(stateAfter);
});
