const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../css/sliderHeader.css","../css/reset.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./oneHotelOffer.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
/* empty css           */
if (document.querySelector('[data-component="sliderHeader"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0, import.meta.url);
}
const slider = document.querySelector(".mySwiper");
if (slider) {
  new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-header-next",
      prevEl: ".swiper-header-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}
