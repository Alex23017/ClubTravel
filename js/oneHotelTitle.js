function OneHotelTitle(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGRpdiBjbGFzcz0iaG90ZWxfX2NhcmQtd3JhcHBlciI+DQogICAgPGRpdiBjbGFzcz0iaG90ZWxfX2NhcmQtbmFtZSI+DQogICAgICB7e25hbWV9fQ0KICAgIDxkaXYgY2xhc3M9ImhvdGVsX19jYXJkLW1vcmUiPg0KICAgICAgPHN2Zz4NCiAgICAgICAgPHVzZSB4bGluazpocmVmPScjaWNvbi1wbHVzLXNoaW55Jz48L3VzZT4NCiAgICAgIDwvc3ZnPg0KICAgIDwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImhvdGVsX19jYXJkLXN0YXJzIj4NCiAgICAgIHt7c3RhcnN9fQ0KICAgIDwvZGl2Pg0KICA8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iaG90ZWxfX2NhcmQtbG9jYXRpb24iPg0KICAgDQogICAgPHN2ZyBjbGFzcz0iaG90ZWxfX2NhcmQtcGluIj4NCiAgICAgICAgPHVzZSB4bGluazpocmVmPScjaWNvbi1waW4tZ3JlYW4nPjwvdXNlPg0KICAgICAgPC9zdmc+DQogICAgICB7e2FkZHJlc3N9fQ0KICA8L2Rpdj4NCg0KPC9kaXY+");
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
const dataHotel = {
  hotelName: "AMBASSADOR",
  address: "Болгария, Золотые Пески",
  rating: 4
};
function renderCard(data) {
  const container = document.querySelector(".hotel__card");
  if (!container) return;
  let stars = "";
  for (let i = 1; i < data.rating; i++) {
    stars += ` <svg class="hotel__card-star">
        <use xlink:href='#icon-star-shiny'></use>
      </svg>`;
  }
  const oneHotelTitle = OneHotelTitle({
    name: data.hotelName,
    stars,
    address: data.address,
    items: [
      { name: "Laptop", price: 999 },
      { name: "Mouse", price: 29 },
      { name: "Keyboard", price: 79 }
    ]
  });
  container.appendChild(oneHotelTitle);
  console.log(oneHotelTitle);
}
renderCard(dataHotel);
