import html2pdf from "html2pdf.js";

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

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});

const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  const element = document.querySelector(".resume");
  const opt = {
    margin: [0, 0, 0, 0],
    filename: "resume.pdf",
    html2canvas: {
      scale: 5,
      width: 595,
      windowWidth: 800,
      useCORS: true,
    },
    jsPDF: {
      unit: "px",
      format: [595, element.scrollHeight], 
    },
  };

  html2pdf().from(element).set(opt).save();
});
