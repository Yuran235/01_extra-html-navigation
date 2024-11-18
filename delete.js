let printOnScreen0 = 1 + 2 + 3;
let printOnScreen1 = printOnScreen0.toString();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("output").textContent = printOnScreen1;
});
