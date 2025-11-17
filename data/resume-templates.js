export const templates = [
  { id: "tech-standard", name: "Engineering Standard", layout: "single-column" },
  { id: "creative-sidebar", name: "Creative Designer", layout: "two-column-sidebar" }
];

export function getTemplateById(id) {
  return templates.find(t => t.id === id) || templates[0];
}
