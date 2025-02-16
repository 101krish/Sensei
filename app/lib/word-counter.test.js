import { countTotalWords } from "./word-counter";

describe("resume word counts parser", () => {
  test("correctly parses multiple whitespaces", () => {
    expect(countTotalWords("Hello   React  Builder")).toBe(3);
  });
});
