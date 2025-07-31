import { showRippleAnimation } from "./animations/ripple";
import { registerEditableText } from "./editableText";
import { saveResumeToPdf } from "./savePdf";

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => showRippleAnimation(button));
});

const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", (e) => {
  showRippleAnimation(e.target);
  saveResumeToPdf();
})

const editableTexts = document.querySelectorAll(".editable-text");

editableTexts.forEach((element, index) => registerEditableText(element, index));
