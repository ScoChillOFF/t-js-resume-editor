export function showSavedIndicator(element) {
  element.classList.add("saved");
  setTimeout(() => element.classList.remove("saved"), 500);
}
