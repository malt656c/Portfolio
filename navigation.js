const menu = document.querySelector(".menu");
const menu_close = document.querySelector(".menu_close");
const menu_open = document.querySelector(".menu_open");
const burger_knap = document.querySelector(".burger_knap");

function toggle_menu() {
  if (menu.classList.contains("show_menu")) {
    menu.classList.remove("show_menu");

    menu_close.classList.remove("show_menu_toggle");
    menu_close.classList.add("hide_menu_toggle");

    menu_open.classList.remove("hide_menu_toggle");
    menu_open.classList.add("show_menu_toggle");
  } else {
    menu.classList.add("show_menu");
    menu_close.classList.remove("hide_menu_toggle");
    menu_close.classList.add("show_menu_toggle");

    menu_open.classList.remove("show_menu_toggle");
    menu_open.classList.add("hide_menu_toggle");
  }
}

function portfolio_link() {
  window.location.replace("portfolio.html");
}
function om_mig_link() {
  window.location.replace("om_mig.html");
}
function forside_link() {
  window.location.replace("index.html");
}
