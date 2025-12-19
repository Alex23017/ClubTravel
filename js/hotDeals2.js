const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/hotDeals.css","css/reset.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./sliderHeader.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
import { g as getListHotel } from "./listHotel.js";
import { h as hotDealsCard } from "./hotDealsCard.js";
import "./variables.js";
import "./api.js";
if (document.querySelector('[data-component="hotDeals"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0);
}
function sliderInit() {
  const slider = document.querySelector(".mySwiperHotDeals");
  if (slider) {
    new Swiper(".mySwiperHotDeals", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 25,
      navigation: {
        nextEl: ".swiper__hotdeals-next",
        prevEl: ".swiper__hotdeals-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 26
        }
      }
    });
  }
}
const data = await getListHotel();
function onHotelClick(e) {
  const id = e.currentTarget.dataset.id;
  window.location.href = `/ClubTravel/html/pages/oneHotel.html?id=${id}`;
}
function renderOffer() {
  const container = document.querySelector(".hotdeals__container");
  if (!container) return;
  data.forEach((item) => {
    let getStars = "";
    for (let i = 0; i < item.stars; i++) {
      getStars += `
      <svg class="hotdeals__category-star">
      <use xlink:href="#icon-star-shiny"></use>
      </svg>`;
    }
    const offerCard = hotDealsCard({
      documentId: item.documentId,
      img: item.img[0].url,
      data: item.data,
      location: item.location,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice,
      priceCount: item.priceCount,
      stars: getStars
    });
    offerCard.addEventListener("click", onHotelClick);
    container.appendChild(offerCard);
  });
}
sliderInit();
renderOffer();
export {
  renderOffer,
  sliderInit
};
