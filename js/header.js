const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/header.css","css/reset.css","js/imgHeader.js","js/sliderHeader.js","css/sliderHeader.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./sliderHeader.js";
if (document.querySelector('[data-component="header"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0);
  __vitePreload(() => import("./imgHeader.js"), true ? __vite__mapDeps([2,3,4]) : void 0);
  __vitePreload(() => import("./sliderHeader.js").then((n) => n.a), true ? __vite__mapDeps([3,4]) : void 0);
}
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
