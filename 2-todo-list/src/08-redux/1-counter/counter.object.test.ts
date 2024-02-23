import { test, expect, beforeEach } from "vitest";

import { counter } from "./counter.object";

beforeEach(() => {
  counter.reset();
});

test("it should increment by 1", () => {
  counter.increment();
  expect(counter.value).toBe(1);
});

test("it should increment by a specified amount", () => {
  counter.increment(5);
  expect(counter.value).toBe(5);
});

test("it should reset", () => {
  counter.reset();
  expect(counter.value).toBe(0);
});
