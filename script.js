const open_menu = document.getElementById("sidebar-menu-indicator");
const close_menu = document.getElementById("close-menu");

open_menu.addEventListener("click", () => {
  document.querySelector(".left-section").classList.add("show_list");
  document
    .getElementById("responsive-bg-overlay")
    .classList.add("show_overlay");
});
close_menu.addEventListener("click", () => {
  document.querySelector(".left-section").classList.remove("show_list");
  document
    .getElementById("responsive-bg-overlay")
    .classList.remove("show_overlay");
});
