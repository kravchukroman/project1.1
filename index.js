const button = document.querySelector("#open");
const banner = document.querySelector("#banner");

function showBanner() {
  banner.style.opacity = 1;
}

button.addEventListener("click", showBanner);
