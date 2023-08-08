var mIcon = document.querySelector(".menu-icon");
var nLinks = document.querySelector(".nav-links");

mIcon.addEventListener("click", () => {
  nLinks.classList.toggle("navShow");
});