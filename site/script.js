// Simple button click alert
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Thank you for your interest! Contact us to purchase.");
  });
});
