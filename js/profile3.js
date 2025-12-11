const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/profile.css","css/reset.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./oneHotelOffer.js";
import { S as Swiper, N as Navigation, P as Pagination } from "./swiper-core.js";
import { A as API_VARIABLES } from "./variables.js";
import { a as getResource } from "./api.js";
async function getProfile() {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    console.error("JWT отсутствует");
    return [];
  }
  try {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/api/orders?populate=*`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json"
      }
    });
    return res;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}
function profileComponent(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGRpdj4NCiAgPGRpdiBjbGFzcz0icHJvZmlsZV9fb3JkZXItY2FyZCI+DQogICAgPGRpdiBjbGFzcz0icHJvZmlsZV9fbGlzdC1udW1iZXIiPjxwPnt7b3JkZXJOdW1iZXJ9fTwvcD48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19saXN0LXByaWNlIj48cD57e29yZGVyUHJpY2V9fTwvcD48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19saXN0LWVtYWlsIj48cD57e29yZGVyRW1haWx9fTwvcD48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19saXN0LXN0YXR1cyB7e3N0YXR1c0NsYXNzfX0iPjxwPnt7b3JkZXJTdGF0dXN9fTwvcD48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19saXN0LWRhdGEiPjxwPnt7b3JkZXJEYXRlfX08L3A+PC9kaXY+DQogIDwvZGl2Pg0KDQogIDxkaXYgY2xhc3M9InByb2ZpbGVfX29yZGVyLWNhcmQgcHJvZmlsZV9fb3JkZXItY2FyZC0tbW9iIj4NCiAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19vcmRlci1oZWFkZXIgcHJvZmlsZV9fb3JkZXItaGVhZGVyLS1tb2IiPg0KICAgICAgPGRpdiBjbGFzcz0icHJvZmlsZV9fb3JkZXItbnVtYmVyIj48cD7QndC+0LzQtdGAINC30LDQutCw0LfQsDwvcD48L2Rpdj4NCiAgICAgIDxkaXYgY2xhc3M9InByb2ZpbGVfX29yZGVyLXByaWNlIj48cD7QodGD0LzQvNCwPC9wPjwvZGl2Pg0KICAgICAgPGRpdiBjbGFzcz0icHJvZmlsZV9fb3JkZXItZW1haWwiPjxwPkUtbWFpbDwvcD48L2Rpdj4NCiAgICAgIDxkaXYgY2xhc3M9InByb2ZpbGVfX29yZGVyLXN0YXR1cyI+PHA+Q9GC0LDRgtGD0YE8L3A+PC9kaXY+DQogICAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19vcmRlci1kYXRhIj48cD7QlNCw0YLQsDwvcD48L2Rpdj4NCiAgICA8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19vcmRlci1pbmZvLS1tb2IiPg0KICAgICAgPGRpdiBjbGFzcz0icHJvZmlsZV9fbGlzdC1udW1iZXIiPjxwPnt7b3JkZXJOdW1iZXJ9fTwvcD48L2Rpdj4NCiAgICAgIDxkaXYgY2xhc3M9InByb2ZpbGVfX2xpc3QtcHJpY2UiPjxwPnt7b3JkZXJQcmljZX19PC9wPjwvZGl2Pg0KICAgICAgPGRpdiBjbGFzcz0icHJvZmlsZV9fbGlzdC1lbWFpbCI+PHA+e3tvcmRlckVtYWlsfX08L3A+PC9kaXY+DQogICAgICA8ZGl2IGNsYXNzPSJwcm9maWxlX19saXN0LXN0YXR1cyB7e3N0YXR1c0NsYXNzfX0iPjxwPnt7b3JkZXJTdGF0dXN9fTwvcD48L2Rpdj4NCiAgICAgIDxkaXYgY2xhc3M9InByb2ZpbGVfX2xpc3QtZGF0YSI+PHA+e3tvcmRlckRhdGV9fTwvcD48L2Rpdj4NCiAgICA8L2Rpdj4NCiAgPC9kaXY+DQo8L2Rpdj4NCg==");
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
if (document.querySelector('[data-component="profile"]')) {
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
  __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([1]) : void 0);
}
let mySwiperProfile = null;
function sliderInit() {
  const slider = document.querySelector(".mySwiperProfile");
  const current = document.getElementById("current");
  const total = document.getElementById("total");
  if (slider) {
    mySwiperProfile = new Swiper(".mySwiperProfile", {
      on: {
        init(swiper) {
          total.textContent = swiper.slides.length;
          current.textContent = swiper.realIndex + 1;
        },
        slideChange(swiper) {
          current.textContent = swiper.realIndex + 1;
        }
      },
      modules: [Navigation, Pagination],
      loop: slider.querySelectorAll(".swiper-slide").length > 1,
      slidesPerView: 1,
      spaceBetween: 25,
      navigation: {
        nextEl: ".swiper__profile-next",
        prevEl: ".swiper__profile-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
  window.mySwiperProfile = mySwiperProfile;
}
sliderInit();
const data = await getProfile() || [];
function renderOffer() {
  const container = document.querySelector(".profile__order-render");
  const containerNext = document.querySelector(".profile__order-render--next");
  if (!container) return;
  const orders = data.slice(0, 9);
  const orderNexts = data.slice(9, 18);
  const profileItemsLength = document.querySelector(".profile__items-length");
  mySwiperProfile.on("slideChange", () => {
    const sliderNumber = mySwiperProfile.realIndex + 1;
    profileItemsLength.innerHTML = `
  Показано ${sliderNumber === 1 ? orders.length : data.length} из ${data.length}
  `;
  });
  orders.forEach((item) => {
    const isProcessing = item.orderStatus;
    const status = !isProcessing ? "в обработке" : "оплачено";
    const statusClass = !isProcessing ? "processing" : "paid";
    const offerCard = profileComponent({
      orderNumber: item.orderNumber,
      orderPrice: item.orderPrice + ".00",
      orderStatus: status,
      statusClass,
      orderDate: item.orderDate
    });
    container.insertAdjacentHTML("beforeend", offerCard);
  });
  orderNexts.forEach((item) => {
    const isProcessing = item.orderStatus;
    const status = !isProcessing ? "в обработке" : "оплачено";
    const statusClass = !isProcessing ? "processing" : "paid";
    const offerCard = profileComponent({
      orderNumber: item.orderNumber,
      orderPrice: item.orderPrice + ".00",
      orderStatus: status,
      statusClass,
      orderDate: item.orderDate
    });
    containerNext.insertAdjacentHTML("beforeend", offerCard);
  });
}
renderOffer();
const fileInput = document.getElementById("avatar");
const preview = document.getElementById("preview");
const profilePolitical = document.querySelector(".profile__political");
function updateMargin() {
  if (!preview.getAttribute("src")) {
    profilePolitical.classList.add("margin");
  } else {
    profilePolitical.classList.remove("margin");
  }
}
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    localStorage.setItem("avatar", base64);
    preview.src = base64;
    preview.style.display = "block";
    profilePolitical.classList.remove("margin");
  };
  reader.readAsDataURL(file);
});
const savedAvatar = localStorage.getItem("avatar");
if (savedAvatar) {
  preview.src = savedAvatar;
  preview.style.display = "block";
}
const profileUsername = document.querySelector(".profile__username");
const profileOrderEmail = document.querySelectorAll(".profile__list-email");
const profileLocalName = localStorage.getItem("username");
const logOut = document.querySelector(".profile__logout");
function isLoggedIn() {
  return localStorage.getItem("Logged") === "true";
}
logOut.addEventListener("click", () => {
  if (isLoggedIn()) {
    localStorage.removeItem("Logged");
    localStorage.removeItem("username");
    localStorage.removeItem("jwt");
    localStorage.removeItem("token");
    window.location.reload();
  }
  if (!isLoggedIn()) {
    window.location.replace("html/pages/authorization.html?tab=authorization");
  }
});
profileUsername.textContent = profileLocalName.split("@")[0];
profileOrderEmail.forEach((email) => email.textContent = profileLocalName);
updateMargin();
export {
  mySwiperProfile,
  renderOffer,
  sliderInit
};
