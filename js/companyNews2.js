const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/companyNews.css","css/reset.css"])))=>i.map(i=>d[i]);
import { s as skeleton, _ as __vitePreload } from "./oneHotelOffer.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
import { A as API_VARIABLES } from "./variables.js";
import { g as getPublicResource } from "./api.js";
async function getCompanyNews() {
  try {
    const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/company-news?populate=*`);
    if (res) {
      skeleton(".news__container", ".skeleton__card");
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching company news:", error);
  }
}
function companyCard(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGRpdiBjbGFzcz0ibmV3c19fY2FyZCBzd2lwZXItc2xpZGUiPg0KICA8aW1nIGNsYXNzPSJuZXdzX19pbWcgYXZhdGFyIiBzcmM9e3tpbWd9fSBhbHQ9IiIgLz4NCiAgPHN2ZyBjbGFzcz0ibmV3c19faWNvbi1wcmljZSI+DQogICAgPHVzZSB4bGluazpocmVmPXt7aWNvbkNvdW50fX0+PC91c2U+DQogIDwvc3ZnPg0KICA8ZGl2IGNsYXNzPSJuZXdzX19kYXRhIj4NCiAgICA8c3ZnIGNsYXNzPSJuZXdzX19kYXRhLWNsb2NrIj4NCiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ljb24tbmV3c0Nsb2NrIj48L3VzZT4NCiAgICA8L3N2Zz4NCiAgICA8cCBjbGFzcz0ibmV3c19fZGF0YS10ZXh0IGxpbmUgc2hvcnQgc2tlbGV0b25KUyI+e3tkYXRhfX08L3A+DQogIDwvZGl2Pg0KICA8cCBjbGFzcz0ibmV3c19fZGF0YS10aXRsZSBsaW5lIHNob3J0IHNrZWxldG9uSlMiPnt7dGl0bGV9fTwvcD4NCjwvZGl2Pg0K");
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
if (document.querySelector('[data-component="companyNews"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0);
}
function sliderInit() {
  const slider = document.querySelector(".mySwiperNews");
  if (slider) {
    new Swiper(".mySwiperNews", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 28,
      navigation: {
        nextEl: ".swiper__news-next",
        prevEl: ".swiper__news-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 28
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 28
        }
      }
    });
  }
}
const data = await getCompanyNews();
function renderOffer() {
  const container = document.querySelector(".news__container");
  if (!container) return;
  data.forEach((item) => {
    const offerCard = companyCard({
      title: item.title,
      img: item.img[0].url,
      data: item.data,
      iconCount: item.iconCount
    });
    container.appendChild(offerCard);
  });
}
sliderInit();
renderOffer();
const companyNews = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  renderOffer
}, Symbol.toStringTag, { value: "Module" }));
export {
  companyNews as c,
  getCompanyNews as g,
  renderOffer as r
};
