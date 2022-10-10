const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const overlay1 = document.getElementById("overlay1");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("flex");
  overlay1.classList.toggle("hidden");
  overlay1.classList.toggle("flex");
});
