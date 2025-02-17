export function countTotalWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

export function isTextWithinWordLimit(text, limit = 500) {
  return countTotalWords(text) <= limit;
}
