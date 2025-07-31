import html2pdf from "html2pdf.js";

export function saveResumeToPdf() {
  const element = document.getElementById("resume");
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
      format: [595, element.scrollHeight + 1],
    },
  };

  html2pdf().from(element).set(opt).save();
}
