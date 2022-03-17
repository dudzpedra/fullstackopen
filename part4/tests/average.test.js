const { describe, expect } = require("@jest/globals");

const average = require("../utils/for_testing").average;

describe("average", () => {
  test("of one value is the value itself", () => {
    expect(average([1])).toBe(1);
  });
  test("of many is calculated right", () => {
    expect(average([2, 4, 6, 8])).toBe(5);
  });
  test("of empty array is zero", () => {
    expect(average([])).toBe(0);
  });
});
