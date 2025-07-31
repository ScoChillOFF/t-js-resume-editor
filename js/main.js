document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editable-text").forEach((el) => {
    let hasChanges = false;

    el.addEventListener("input", () => {
      hasChanges = true;
    });

    el.addEventListener("blur", function () {
      if (hasChanges) {
        this.classList.add("saved");

        setTimeout(() => {
          this.classList.remove("saved");
          hasChanges = false;
        }, 500);
      }
    });
  });
});

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', function() {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    
    button.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});
