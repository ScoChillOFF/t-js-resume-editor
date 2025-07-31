export function showRippleAnimation(element) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple-effect");

  element.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}
