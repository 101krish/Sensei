export function estimatePageCount(textLength, charsPerPage = 3000) {
  if (!textLength) return 0;
  return Math.ceil(textLength / charsPerPage);
}

export function getRecommendedFontSize(textLength) {
  if (textLength > 6000) return "10px";
  if (textLength > 4000) return "11px";
  return "12px";
}
