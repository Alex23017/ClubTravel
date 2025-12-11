const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../css/barMenu.css","../css/reset.css","../css/resultCalendar.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./oneHotelOffer.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
/* empty css           */
import { A as API_VARIABLES } from "./variables.js";
import { g as getPublicResource } from "./api.js";
async function getCalendarPrice() {
  try {
    const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/calendars?populate=*`);
    return res.data;
  } catch (error) {
    console.error("Error fetching company news:", error);
  }
}
function resultCalendar(initialProps = {}) {
  const decodeBase64Utf8 = (b64) => {
    if (typeof atob === "function" && typeof TextDecoder !== "undefined") {
      const bin2 = atob(b64);
      const bytes = new Uint8Array(bin2.length);
      for (let i = 0; i < bin2.length; i++) bytes[i] = bin2.charCodeAt(i);
      return new TextDecoder("utf-8").decode(bytes);
    }
    if (typeof Buffer !== "undefined") {
      return Buffer.from(b64, "base64").toString("utf-8");
    }
    const bin = atob(b64);
    try {
      return decodeURIComponent(escape(bin));
    } catch (e) {
      return bin;
    }
  };
  const sourceTemplate = decodeBase64Utf8("PGRpdiBkYXRhLWNvbXBvbmVudD0icmVzdWx0Q2FsZW5kYXIiIGNsYXNzPSJjYWxlbmRhciBzd2lwZXItc2xpZGUiPg0KICA8ZGl2IGNsYXNzPSJoZWFkZXIiPnt7bW9udGh9fTwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJ3ZWVrZGF5cyI+DQogICAgPGRpdj7Qn9C9PC9kaXY+DQogICAgPGRpdj7QktGCPC9kaXY+DQogICAgPGRpdj7QodGAPC9kaXY+DQogICAgPGRpdj7Qp9GCPC9kaXY+DQogICAgPGRpdj7Qn9GCPC9kaXY+DQogICAgPGRpdj7QodCxPC9kaXY+DQogICAgPGRpdj7QktGBPC9kaXY+DQogIDwvZGl2Pg0KDQogIDxkaXYgY2xhc3M9ImRheXMiPg0KICAgIDwhLS0gMS3RjyDRgdGC0YDQvtC60LAgLS0+DQogICAgPGRpdiBjbGFzcz0iZGF5IGVtcHR5Ij48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkgZW1wdHkiPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSBlbXB0eSI+PC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5IGVtcHR5Ij48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjE8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjI8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjM8L2Rpdj4NCg0KICAgIDwhLS0gMi3RjyAtLT4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjQ8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjU8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjY8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjc8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjg8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjk8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjEwPC9kaXY+DQoNCiAgICA8IS0tIDMt0Y8gLS0+DQogICAgPGRpdiBjbGFzcz0iZGF5Ij4xMTwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSI+MTI8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjEzPC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5Ij4xNDwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSI+MTU8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjE2PC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5Ij4xNzwvZGl2Pg0KDQogICAgPCEtLSA0LdGPIC0tPg0KICAgIDxkaXYgY2xhc3M9ImRheSI+DQogICAgICA8c3Bhbj4xODwvc3Bhbj4NCiAgICA8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjxzcGFuPjE5PC9zcGFuPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSI+PHNwYW4+MjA8L3NwYW4+PC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5Ij48c3Bhbj4yMTwvc3Bhbj48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjxzcGFuPjIyPC9zcGFuPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSI+PHNwYW4+MjM8L3NwYW4+PC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5IGRheV9fcHJpY2UgZGF5X19ib3JkZXIiPg0KICAgICAgPHAgY2xhc3M9ImRheV9fcHJpY2UiPnt7cHJpY2V9feKCrDwvcD4NCiAgICAgPHA+MjQ8L3A+DQogICAgPC9kaXY+DQoNCiAgICA8IS0tIDUt0Y8gLS0+DQogICAgPGRpdiBjbGFzcz0iZGF5Ij48c3Bhbj4yNTwvc3Bhbj48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjxzcGFuPjI2PC9zcGFuPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSI+PHNwYW4+Mjc8L3NwYW4+PC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5Ij48c3Bhbj4yODwvc3Bhbj48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJkYXkiPjxzcGFuPjI5PC9zcGFuPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImRheSI+PHNwYW4+MzA8L3NwYW4+PC9kaXY+DQogICAgPGRpdiBjbGFzcz0iZGF5IGRheV9fcHJpY2UgZGF5X19ib3JkZXIiPg0KICAgICAgPHAgY2xhc3M9ImRheV9fcHJpY2UiPnt7c2Vjb25kUHJpY2V9feKCrDwvcD4NCiAgICAgIDxwPjMxPC9wPg0KICAgIDwvZGl2Pg0KICA8L2Rpdj4NCjwvZGl2Pg0K");
  let currentProps = { ...initialProps };
  const LBRACE = String.fromCharCode(123), RBRACE = String.fromCharCode(125), OPEN = LBRACE + LBRACE, CLOSE = RBRACE + RBRACE;
  function createHtml(props) {
    let template = sourceTemplate, maxIterations = 10, iteration = 0;
    while (iteration < maxIterations && template.indexOf(OPEN + "#if") !== -1) {
      iteration++;
      template = template.replace(
        new RegExp(`${OPEN}#if\\s+([^}]+?)${CLOSE}([\\s\\S]*?)${OPEN}else\\s*${CLOSE}([\\s\\S]*?)${OPEN}\\/if\\s*${CLOSE}`, "g"),
        (m, cond, ifBlock, elseBlock) => props[cond.trim()] ? ifBlock : elseBlock
      );
      template = template.replace(
        new RegExp(`${OPEN}#if\\s+([^}]+?)${CLOSE}([\\s\\S]*?)${OPEN}\\/if\\s*${CLOSE}`, "g"),
        (m, cond, block) => props[cond.trim()] ? block : ""
      );
      template = template.replace(
        new RegExp(`${OPEN}#if\\s*\\((eq\\s+([^\\s]+)\\s+"([^"]+)"\\s*)\\)${CLOSE}([\\s\\S]*?)${OPEN}else\\s*${CLOSE}([\\s\\S]*?)${OPEN}\\/if\\s*${CLOSE}`, "g"),
        (m, _f, key, expected, ifBlock, elseBlock) => props[key] === expected ? ifBlock : elseBlock
      );
      template = template.replace(
        new RegExp(`${OPEN}#if\\s*\\((eq\\s+([^\\s]+)\\s+"([^"]+)"\\s*)\\)${CLOSE}([\\s\\S]*?)${OPEN}\\/if\\s*${CLOSE}`, "g"),
        (m, _f, key, expected, block) => props[key] === expected ? block : ""
      );
    }
    Object.keys(props).forEach((key) => {
      const keyRe = new RegExp(`${OPEN}\\s*${key}\\s*${CLOSE}`, "g");
      template = template.replace(keyRe, props[key] ?? "");
    });
    template = template.replace(/\s[a-zA-Z0-9_-]+=['"]\s*['"]/g, "");
    template = template.replace(new RegExp(`${OPEN}[^}]+?${CLOSE}`, "g"), "");
    return template;
  }
  function renderElement(props) {
    const html = createHtml(props);
    const container = document.createElement("div");
    container.innerHTML = html.trim();
    return container.firstElementChild;
  }
  let rootElement = renderElement(currentProps);
  const api = {};
  function update(newProps) {
    currentProps = { ...currentProps, ...newProps };
    if (rootElement.parentElement) {
      const parent = rootElement.parentElement;
      const next = renderElement(currentProps);
      Object.keys(api).forEach((name) => next[name] = api[name]);
      parent.replaceChild(next, rootElement);
      rootElement = next;
      return next;
    } else {
      const next = renderElement(currentProps);
      Object.keys(api).forEach((name) => next[name] = api[name]);
      rootElement = next;
      return next;
    }
  }
  api.update = update;
  api.toString = () => rootElement?.outerHTML ?? "";
  api.render = (target) => {
    if (target && target.appendChild) target.appendChild(rootElement);
    return rootElement;
  };
  Object.keys(api).forEach((name) => rootElement[name] = api[name]);
  return rootElement;
}
if (document.querySelector('[data-component="barMenu"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0, import.meta.url);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([2]) : void 0, import.meta.url);
}
function sliderInit() {
  const slider = document.querySelector(".mySwiperCalendar");
  if (slider) {
    new Swiper(".mySwiperCalendar", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 4,
      spaceBetween: 46,
      navigation: {
        nextEl: ".swiper__calendar-next",
        prevEl: ".swiper__calendar-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 25
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 46
        }
      }
    });
  }
}
const data = await getCalendarPrice();
function renderOffer() {
  const container = document.querySelector(".calendar-wrapper");
  if (!container) return;
  data.forEach((item) => {
    const offerCard = resultCalendar({
      month: item.month,
      price: item.price,
      secondPrice: item.secondPrice
    });
    container.appendChild(offerCard);
  });
}
function setupDropdown(dropdownId) {
  const btn = document.getElementById(dropdownId);
  if (!btn) return;
  const menu = btn.parentElement.querySelector(".dropdown-menu");
  if (!menu) return;
  const items = menu.querySelectorAll(".dropdown-item");
  if (!items) return;
  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.textContent = item.textContent;
    });
  });
}
setupDropdown("dropdownBarPrice");
setupDropdown("dropdownBarLow");
const btnOpenCalendar = document.querySelector(".bar__calendar");
const btnOpenCalendarMob = document.querySelector(".bar__calendar--mob");
const calendarContainer = document.querySelector(".calendar__container");
const barSort = document.querySelector(".bar__sort");
const barCalendarText = document.querySelector(".bar__calendar-text");
const barCalendarTextOpen = document.querySelector(".bar__calendar-text--open");
const barHotel = document.querySelector(".bar__hotel");
const arrowNext = document.querySelector(".swiper__calendar-next");
const arrowPrev = document.querySelector(".swiper__calendar-prev");
const calendarTitle = document.querySelector(".calendar__container-title");
const addOpenArray = [
  btnOpenCalendar,
  btnOpenCalendarMob,
  calendarContainer,
  barSort,
  barCalendarText,
  barCalendarTextOpen,
  barHotel,
  arrowNext,
  arrowPrev,
  calendarTitle
].filter(Boolean);
function addOpen(array, element) {
  element.addEventListener("click", () => {
    array.forEach((item) => {
      item.classList.toggle("open");
    });
  });
}
renderOffer();
sliderInit();
addOpen(addOpenArray, btnOpenCalendar);
addOpen(addOpenArray, btnOpenCalendarMob);
export {
  renderOffer
};
