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
