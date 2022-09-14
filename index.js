let menu = document.querySelector(".menu.menu_disabled");
let nav = document.querySelector(".nav");
let nav_list = document.querySelector(".nav__list");
let nav_links = document.querySelectorAll(".nav__link");
let nav_icon = document.querySelector(".nav__icon");

function setClassesOnWidth() {
  if (document.documentElement.clientWidth <= 1100) {
    nav_list.classList.add("nav__list_disabled");
    menu.classList.remove("menu_disabled");
  } else {
    nav_list.classList.remove("nav__list_disabled");
    menu.classList.add("menu_disabled");
  }
}

window.addEventListener("DOMContentLoaded", setClassesOnWidth);

window.addEventListener("resize", setClassesOnWidth);

menu.addEventListener("click", () => {
  menu.classList.add("menu_disabled");

  nav.classList.add("nav_active");

  nav_list.classList.remove("nav__list_disabled");
  nav_list.classList.add("nav__list_active");
});

for (let elem of nav_links) {
  elem.addEventListener("click", () => {
    menu.classList.remove("menu_disabled");

    nav.classList.remove("nav_active");

    nav_list.classList.add("nav__list_disabled");
    nav_list.classList.remove("nav__list_active");
  });
}

nav_icon.addEventListener("click", () => {
    menu.classList.remove("menu_disabled");

    nav.classList.remove("nav_active");

    nav_list.classList.add("nav__list_disabled");
    nav_list.classList.remove("nav__list_active");
});
