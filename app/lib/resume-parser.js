/**
 * Resume text parsing and clean logic.
 */

export function sanitizeResumeText(text) {
  if (!text) return "";
  // Strip common exploit injection patterns
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
}

export function parseKeywords(skillsString) {
  if (!skillsString) return [];
  return skillsString
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);
}
