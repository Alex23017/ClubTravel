if (document.querySelector('[data-component="header"]')) {
  import("/styles/components/header.scss");
  import("/styles/base/reset.scss");
  import("./imgHeader.js")
  import("./sliderHeader.js");
}

// BURGER MENU
document.addEventListener("click", (e) => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".burger__menu");
  const body = document.body;
  if (burger.contains(e.target)) {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
    body.classList.toggle("open");
  } else {
    burger.classList.remove("open");
    menu.classList.remove("open");
    body.classList.remove("open");
  }
});
