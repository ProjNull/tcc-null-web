function setupMobileMenu() {
  const menuOpen = document.getElementById("main-menu-open");
  const menuClose = document.getElementById("main-menu-close");
  const menu = document.getElementById("main-menu");

  menuOpen.addEventListener("click", () => {
    menu.classList.add("open");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("open");
  });
}

addEventListener("DOMContentLoaded", setupMobileMenu);
