import { initializeTimes, updateTimes } from "../availableTimesReducer";

test("initializeTimes returns available times for today", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
  expect(times.every((t) => typeof t === "string")).toBe(true);
});

test("updateTimes returns available times for a given date", () => {
  const mockDate = new Date("2025-08-07");
  const result = updateTimes([], { date: mockDate });

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(result.every((t) => typeof t === "string")).toBe(true);
});
