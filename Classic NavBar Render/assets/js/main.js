const hamborger = document.getElementById("hamborger");
const mobileMenu = document.getElementById("menu");

hamborger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display == "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
  if (event.target == mobileMenu) {
    mobileMenu.style.display = "none";
  }
});
