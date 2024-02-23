import { test, expect } from "vitest";

import { Counter } from "./2-counter.class";

test("it should increment by 1", () => {
  const counter = new Counter();
  counter.increment();
  expect(counter.value).toBe(1);
});

test("it should increment by a specified amount", () => {
  const counter = new Counter();
  counter.increment(5);
  expect(counter.value).toBe(5);
});

test("it should reset", () => {
  const counter = new Counter();
  counter.reset();
  expect(counter.value).toBe(0);
});
