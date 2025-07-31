import { showSavedIndicator } from "./animations/save";

export function registerEditableText(element, elementIndex) {
  let originalContent = element.textContent;
  let hasChanges = false;

  element.addEventListener("focus", () => {
    originalContent = element.textContent;
    hasChanges = false;
  });

  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      element.blur();
    } else if (e.key === "Escape") {
      e.preventDefault();
      element.textContent = originalContent;
      hasChanges = false;
      element.blur();
    }
  });

  element.addEventListener("input", () => {
    hasChanges = element.textContent !== originalContent;
  });

  element.addEventListener("blur", () => {
    if (hasChanges) {
      localStorage.setItem(`editable-text-${elementIndex}`, element.textContent);
      showSavedIndicator(element);
    }
  });

  const savedText = localStorage.getItem(`editable-text-${elementIndex}`);
  if (savedText !== null) {
    element.textContent = savedText;
  }
}
