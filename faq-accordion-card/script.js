const buttons = document.querySelectorAll("dl.faq button");
const descriptions = document.querySelectorAll("dl.faq dd");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let isExpanded = buttons[i].ariaExpanded;
    collapse();

    if (isExpanded === "false") {
      buttons[i].ariaExpanded = "true";
      buttons[i].style.fontWeight = "700";
      descriptions[i].style.maxHeight = descriptions[i].scrollHeight + "px";
    }
  });
}

function collapse() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].ariaExpanded = "false";
    buttons[i].style.fontWeight = "400";
    descriptions[i].style.maxHeight = "0";
  }
}
