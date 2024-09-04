import { sanitizeResumeText, parseKeywords } from "./resume-parser";

describe("resume parsing validations", () => {
  test("strips script html inputs", () => {
    const dirty = "Skill <script>alert(1)</script> React";
    expect(sanitizeResumeText(dirty)).toBe("Skill  React");
  });

  test("extracts skill strings list", () => {
    expect(parseKeywords("React, Node,  Docker")).toEqual(["React", "Node", "Docker"]);
  });
});
