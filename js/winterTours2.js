const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/winterTours.css","css/reset.css","css/hotDeals.css"])))=>i.map(i=>d[i]);
import { s as skeleton, _ as __vitePreload } from "./oneHotelOffer.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
import { A as API_VARIABLES } from "./variables.js";
import { g as getPublicResource } from "./api.js";
async function getWinterTours() {
  try {
    const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/winter-tours?populate=*`);
    if (res) {
      skeleton(".wintertours__container", ".skeleton__card");
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching winter tours:", error);
  }
}
function winterToursCard(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGRpdiBjbGFzcz0id2ludGVyX19jYXJkIHN3aXBlci1zbGlkZSI+DQogIDxpbWcgY2xhc3M9IndpbnRlcl9faW1nIiBzcmM9Int7aW1nfX0iIGFsdD0id2ludGVyQ2FyZCIgLz4NCiAgPGRpdiBjbGFzcz0id2ludGVyX19mb290ZXIiPg0KICAgIDxkaXYgY2xhc3M9IndpbnRlcl9fdG93biI+DQogICAgICA8c3ZnIGNsYXNzPSJ3aW50ZXJfX2Zvb3Rlci1sb2NhdGlvbiI+DQogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ljb24taG90TG9jYXRpb24iPjwvdXNlPg0KICAgICAgPC9zdmc+DQogICAgICA8ZGl2IGNsYXNzPSJ3aW50ZXJfX3Rvd24tdGV4dCI+e3t0b3dufX08L2Rpdj4NCiAgICA8L2Rpdj4NCiAgICA8cCBjbGFzcz0id2ludGVyX19mb290ZXItcHJpY2UiPtC+0YIgPHNwYW4+e3twcmljZX194oKsPC9zcGFuPi/Rh9C10Ls8L3A+DQogIDwvZGl2Pg0KICA8YSBjbGFzcz0id2ludGVyX19saW5rIiBocmVmPSIiPtCS0YvQsdGA0LDRgtGMINGC0YPRgDwvYT4NCjwvZGl2Pg0K");
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
if (document.querySelector('[data-component="winterTours"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0);
}
if (document.querySelector('[data-component="hotDeals"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([2]) : void 0);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0);
}
function sliderInit() {
  const slider = document.querySelector(".mySwiperWinterTours");
  if (slider) {
    new Swiper(".mySwiperWinterTours", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper__winter-next",
        prevEl: ".swiper__winter-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 28
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 28
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  }
}
const data = await getWinterTours();
function renderOffer() {
  const container = document.querySelector(".wintertours__container");
  if (!container) return;
  data.forEach((item) => {
    const offerCard = winterToursCard({
      img: item.img,
      town: item.town,
      price: item.price
    });
    container.appendChild(offerCard);
  });
}
sliderInit();
renderOffer();
export {
  renderOffer
};
