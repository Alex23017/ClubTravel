import { g as getHotelById } from "./hotels.js";
import "./variables.js";
import "./api.js";
function OneHotelInfo(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGRpdiBjbGFzcz0iaG90ZWxfX2luZm8td3JhcHBlciI+DQo8ZGl2IGNsYXNzPSJob3RlbF9fdGl0bGUiPnt7dGl0bGV9fTwvZGl2Pg0KDQogICAgPGRpdiBjbGFzcz0iaG90ZWxfX2Rlc2NyaXB0aW9uIj57e2Rlc2NyaXB0aW9ufX08L2Rpdj4NCg0KICAgIDxkaXYgY2xhc3M9ImhvdGVsX19pbmZvLWxpc3QiPg0KICAgICAgDQogICAgICA8ZGl2IGNsYXNzPSJob3RlbF9fY29sdW1uIj4NCiAgICAgICAgICA8ZGl2IGNsYXNzPSJob3RlbF9faW5mby1pdGVtIj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImhvdGVsX19pbmZvLXRpdGxlIj57e2l0ZW1UaXRsZX19PC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJob3RlbF9faW5mby10ZXh0Ij57e2l0ZW1EZXNjcmlwdGlvbn19PC9kaXY+DQogICAgICAgICAgPC9kaXY+DQoNCiAgICAgICAgICB7e2xlZnRMaXN0fX0NCiAgICAgIDwvZGl2Pg0KICAgICAgDQogICAgICA8ZGl2IGNsYXNzPSJob3RlbF9fY29sdW1uIj4NCiAgICAgICAgICB7e3JpZ2h0TGlzdH19DQogICAgICA8L2Rpdj4NCg0KICAgIDwvZGl2Pg0KDQo8L2Rpdj4=");
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
const dataHotel = await getHotelById("xfmhd9zt1s4qrghz8unla56q");
function renderInfo(data) {
  const container = document.querySelector(".hotel__info");
  if (!container) return;
  const lists = data.serviceLists.list;
  const leftList = lists.slice(0, 3);
  const rightList = lists.slice(3);
  function createInfoBlocks(list) {
    return list.map((item) => {
      const ul = item.subServices.map((li) => `<li>${li.name}</li>`).join("");
      return `
          <div class="hotel__info-item">
            <div class="hotel__info-title">${item.title}</div>
            <ul class="hotel__info-ul">${ul}</ul>
          </div>
        `;
    }).join("");
  }
  const hotelInfo = OneHotelInfo({
    title: data.serviceLists.position.name,
    description: data.serviceLists.position.description,
    itemTitle: data.serviceLists.listPosition.name,
    itemDescription: data.serviceLists.listPosition.description,
    leftList: createInfoBlocks(leftList),
    rightList: createInfoBlocks(rightList)
  });
  container.appendChild(hotelInfo);
}
renderInfo(dataHotel);
