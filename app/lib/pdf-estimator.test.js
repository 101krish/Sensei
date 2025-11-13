import { estimatePageCount, getRecommendedFontSize } from "./pdf-estimator";

describe("resume PDF estimation utils", () => {
  test("correctly scales font sizing based on length", () => {
    expect(getRecommendedFontSize(5000)).toBe("11px");
  });
});
