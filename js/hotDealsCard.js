function hotDealsCard(initialProps = {}) {
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
  const sourceTemplate = decodeBase64Utf8("PGRpdiBjbGFzcz0iaG90ZGVhbHNfX2NhcmQgc3dpcGVyLXNsaWRlIiBkYXRhLWlkPSJ7e2RvY3VtZW50SWR9fSI+DQogIDxpbWcgY2xhc3M9ImhvdGRlYWxzX19pbWciIHNyYz0ie3tpbWd9fSIgYWx0PSJjYXJkX2ltZyIgbG9hZGluZz0ibGF6eSIgLz4NCiAgPGRpdiBjbGFzcz0iaG90ZGVhbHNfX2RhdGEiPg0KICAgIDxzdmcgY2xhc3M9ImhvdGRlYWxzX19kYXRhLWNsb2NrIj4NCiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ljb24tbmV3c0Nsb2NrIj48L3VzZT4NCiAgICA8L3N2Zz4NCiAgICA8cCBjbGFzcz0iaG90ZGVhbHNfX2RhdGEtdGV4dCI+e3tkYXRhfX08L3A+DQogIDwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJob3RkZWFsc19fbG9jYXRpb24iPg0KICAgIDxzdmcgY2xhc3M9ImhvdGRlYWxzX19sb2NhdGlvbi1pY29uIj4NCiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ljb24taG90TG9jYXRpb24iPjwvdXNlPg0KICAgIDwvc3ZnPg0KICAgIDxwIGNsYXNzPSJob3RkZWFsc19fbG9jYXRpb24tdGV4dCI+e3tsb2NhdGlvbn19PC9wPg0KICA8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iaG90ZGVhbHNfX2Zvb3RlciI+DQogICAgPGRpdiBjbGFzcz0iaG90ZGVhbHNfX2Zvb3Rlci1jb2x1bW4iPg0KICAgICAgPHAgY2xhc3M9ImhvdGRlYWxzX19kYXRhLXRpdGxlIj57e3RpdGxlfX08L3A+DQogICAgICA8ZGl2IGNsYXNzPSJob3RkZWFsc19fY2F0ZWdvcnkiPg0KICAgICAgICB7e3N0YXJzfX0NCiAgICAgIDwvZGl2Pg0KICAgIDwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImhvdGRlYWxzX19mb290ZXItY29sdW1uIGhvdGRlYWxzX19mb290ZXItY29sdW1uLS1zZWNvbmQiPg0KICAgICAgPGRpdiBjbGFzcz0iaG90ZGVhbHNfX2JvZHktcHJpY2UiPg0KICAgICAgICA8cCBjbGFzcz0iaG90ZGVhbHNfX3ByaWNlIj48c3Bhbj57e3ByaWNlfX3igqw8L3NwYW4+L9GH0LXQuzwvcD4NCiAgICAgICAgPHAgY2xhc3M9ImhvdGRlYWxzX19wcmljZS1vbGQiPnt7b2xkUHJpY2V9fSDigqwv0YfQtdC7PC9wPg0KICAgICAgPC9kaXY+DQogICAgICA8c3ZnIGNsYXNzPSJob3RkZWFsc19faWNvbi1jb3VudCI+DQogICAgICAgIDx1c2UgeGxpbms6aHJlZj0ie3twcmljZUNvdW50fX0iPjwvdXNlPg0KICAgICAgPC9zdmc+DQogICAgPC9kaXY+DQogIDwvZGl2Pg0KPC9kaXY+DQo=");
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
export {
  hotDealsCard as h
};
