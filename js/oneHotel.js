import "./oneHotelOffer.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
/* empty css             */
import { A as API_VARIABLES } from "./variables.js";
import { b as axios } from "./api.js";
import { g as getHotelById } from "./hotels.js";
import { g as getListHotel } from "./listHotel.js";
import { h as hotDealsCard } from "./hotDealsCard.js";
function OfferCard(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGZvcm0gZGF0YS1jb21wb25lbnQ9Im9uZUhvdGVsT2ZmZXIiIGNsYXNzPSJob3RlbF9fb2ZmZXItd3JhcHBlciI+DQogIDxkaXYgY2xhc3M9ImhvdGVsX19vZmZlci10aXRsZSI+DQogICAgPHNwYW4+0JLRi9Cx0YDQsNC90L3Ri9C5INGC0YPRgDwvc3Bhbj4NCiAgICA8YnV0dG9uIHR5cGU9InN1Ym1pdCI+0LjQt9C80LXQvdC40YLRjDwvYnV0dG9uPg0KPC9kaXY+DQo8ZGl2IGNsYXNzPSJob3RlbF9fb2ZmZXItZGF0ZXMiPg0KICA8ZGl2IGNsYXNzPSJob3RlbF9fb2ZmZXItZGF0ZSI+DQogICAgPHN2Zz4NCiAgICA8dXNlIHhsaW5rOmhyZWY9JyNpY29uLWNhbGVuZGFyJz48L3VzZT4NCiAgPC9zdmc+DQogICAgPHNwYW4+MTgg0LjRjtC90Y8gMjAyMCDQsy4gfCB7e25pZ2h0fX3QvdC+0YfQtdC5PC9zcGFuPg0KICA8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iaG90ZWxfX29mZmVyLXJhaXNlIj4NCiAgICA8c3ZnPg0KICAgIDx1c2UgeGxpbms6aHJlZj0nI2ljb24tZGVwYXJ0dXJlJz48L3VzZT4NCiAgPC9zdmc+DQogICAgPHNwYW4+0JLRi9C70LXRgiDQuNC3IHt7ZnJvbX19PC9zcGFuPg0KICA8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iaG90ZWxfX29mZmVyLWZvb2QiPg0KICAgIDxzdmc+DQogICAgPHVzZSB4bGluazpocmVmPScjaWNvbi1mb29kJz48L3VzZT4NCiAgPC9zdmc+DQogICAgPHNwYW4+e3tmb29kfX08L3NwYW4+DQogIDwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJob3RlbF9fb2ZmZXItaG91c2VzIj4NCiAgICA8c3ZnPg0KICAgIDx1c2UgeGxpbms6aHJlZj0nI2ljb24tYXBhcnRtZW50Jz48L3VzZT4NCiAgPC9zdmc+DQogICAgPHNwYW4+e3tob3VzZXN9fTwvc3Bhbj4NCiAgPC9kaXY+DQo8ZGl2IGNsYXNzPSJob3RlbF9fb2ZmZXItcHJpY2UiPg0KICAgPGI+e3twcmljZXN9feKCrDwvYj4NCi/Rh9C10LsNCjwvZGl2Pg0KPGRpdiBjbGFzcz0iaG90ZWxfX29mZmVyLWRlc2NyaXB0aW9uIj4NCjxiPtCm0LXQvdCwINC90LAg0L7QtNC90L7Qs9C+INGH0LXQu9C+0LLQtdC60LAgPC9iPg0K0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90LAg0L/RgNC4INGA0LDQt9C80LXRidC10L3QuNC4INCyINC00LLRg9GF0LzQtdGB0YLQvdC+0Lwg0L3QvtC80LXRgNC1LiDQptC10L3QsCDQt9Cw0LLQuNGB0LjRgiDQvtGCINC60L7Qu9C40YfQtdGB0YLQstCwINC80LXRgdGCINC4INC80L7QttC10YIg0LjQt9C80LXQvdC40YLRjNGB0Y8uDQo8L2Rpdj4NCjxkaXYgY2xhc3M9Imd1ZXN0cyI+DQogIDxsYWJlbCBmb3I9Imd1ZXN0cyI+0JrQvtC70LjRh9C10YHRgtCy0L4g0L7RgtC00YvRhdCw0Y7RidC40YU8L2xhYmVsPg0KICAgPGRpdiBjbGFzcz0ibGFiZWwiPtCS0LfRgNC+0YHQu9C40YU8L2Rpdj4NCiAgPGlucHV0IHR5cGU9InRleHQiPg0KICA8ZGl2IGNsYXNzPSJsYWJlbCI+0LTQtdGC0LXQuTwvZGl2Pg0KICA8aW5wdXQgdHlwZT0idGV4dCI+DQo8L2Rpdj4NCg0KPGRpdiBjbGFzcz0iaG90ZWxfX29mZmVyLXRvdGFsIj4NCiAg0J7QsdGJ0LDRjyDRgdGC0L7QuNC80L7RgdGC0Ywg0YLRg9GA0LA6DQo8c3Bhbj4NCiAgPGIgaWQ9InByaWNlIj4xIDQyOeKCrDwvYj4NCjwvc3Bhbj4NCjwvZGl2Pg0KPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJob3RlbF9fb2ZmZXItYnV0dG9uIGJ1dHRvbi1wcmltYXJ5Ij4NCiAg0JHRgNC+0L3QuNGA0L7QstCw0YLRjA0KPC9idXR0b24+DQo8ZGl2IGNsYXNzPSJob3RlbF9fb2ZmZXItcG9saWN5Ij4NCjxzdmc+DQogIDx1c2UgeGxpbms6aHJlZj0nI2ljb24tcG9saWN5LWxvY2snPjwvdXNlPg0KPC9zdmc+DQogIDxkaXY+DQogINCS0LDRiNC4INC00LDQvdC90YvQtSDQvdCw0LTQtdC20L3QviDQt9Cw0YnQuNGJ0LXQvdGLINC4INC+0LHRgNCw0LHQsNGC0YvQstCw0Y7RgtGB0Y8g0YHQvtCz0LvQsNGB0L3QviDRgSANCiAgPHNwYW4+DQogIA0KICDRg9GB0LvQvtCy0LjRj9C80Lgg0L7QsdGA0LDQsdC+0YLQutC4INC70LjRh9C90YvRhSDQtNCw0L3QvdGL0YUNCiAgPC9zcGFuPg0KDQogIDwvZGl2Pg0KPC9kaXY+DQo8L2Rpdj4NCjwvZm9ybT4NCiAg");
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
async function addUserOrder(userId, newOrder) {
  const token = localStorage.getItem("token");
  console.log("TOKEN:", token);
  const user = await axios.get(
    `http://localhost:1337/api/users/${userId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const currentOrders = user.data.order || [];
  const updatedOrders = [...currentOrders, newOrder];
  await axios.put(
    `http://localhost:1337/api/users-permissions/users/${userId}`,
    { order: updatedOrders },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}
const dataHotel = await getHotelById("xfmhd9zt1s4qrghz8unla56q");
function renderHotelOffers() {
  const container = document.querySelector(".hotel__offer");
  if (!container) return;
  const offerCard = OfferCard({
    night: dataHotel.night,
    from: dataHotel.from,
    food: dataHotel.food,
    houses: dataHotel.houses,
    prices: dataHotel.price
  });
  return container.appendChild(offerCard);
}
const data = await getListHotel();
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
      img: API_VARIABLES.IMG_URL + item.img[0].url,
      data: item.data,
      location: item.location,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice,
      priceCount: item.priceCount,
      stars: getStars
    });
    container.appendChild(offerCard);
  });
}
renderHotelOffers();
sliderInit();
renderOffer();
async function createOffer() {
  const number = Date.now();
  const date = (/* @__PURE__ */ new Date()).toISOString();
  const userId = localStorage.getItem("userId");
  if (!userId) {
    console.log("не авторизований користувач");
    return;
  }
  const newOrder = {
    number,
    price: 745,
    data: date
  };
  try {
    await addUserOrder(userId, newOrder);
    console.log("замовлення додано");
  } catch (err) {
    console.log("error:", err);
  }
}
const btn = document.querySelector(".hotel__offer-button");
btn.addEventListener("click", createOffer);
