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
  const sourceTemplate = decodeBase64Utf8("PGRpdiBjbGFzcz0iaG90ZGVhbHNfX2NhcmQgc3dpcGVyLXNsaWRlIiBkYXRhLWlkPSJ7e2RvY3VtZW50SWR9fSI+IA0KICA8aW1nIGNsYXNzPSJob3RkZWFsc19faW1nIiBzcmM9Int7aW1nfX0iIGFsdD0iY2FyZF9pbWciPg0KICA8ZGl2IGNsYXNzPSJob3RkZWFsc19fZGF0YSI+DQogICAgPHN2ZyBjbGFzcz0iaG90ZGVhbHNfX2RhdGEtY2xvY2siPg0KICAgICAgPHVzZSB4bGluazpocmVmPSIjaWNvbi1uZXdzQ2xvY2siPjwvdXNlPg0KICAgIDwvc3ZnPg0KICAgIDxwIGNsYXNzPSJob3RkZWFsc19fZGF0YS10ZXh0Ij57e2RhdGF9fTwvcD4NCiAgPC9kaXY+DQogIDxkaXYgY2xhc3M9ImhvdGRlYWxzX19sb2NhdGlvbiI+DQogICAgPHN2ZyBjbGFzcz0iaG90ZGVhbHNfX2xvY2F0aW9uLWljb24iPg0KICAgICAgPHVzZSB4bGluazpocmVmPSIjaWNvbi1ob3RMb2NhdGlvbiI+PC91c2U+DQogICAgPC9zdmc+DQogICAgPHAgY2xhc3M9ImhvdGRlYWxzX19sb2NhdGlvbi10ZXh0Ij57e2xvY2F0aW9ufX08L3A+DQogIDwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJob3RkZWFsc19fZm9vdGVyIj4NCiAgICA8ZGl2IGNsYXNzPSJob3RkZWFsc19fZm9vdGVyLWNvbHVtbiI+DQogICAgICA8cCBjbGFzcz0iaG90ZGVhbHNfX2RhdGEtdGl0bGUiPnt7dGl0bGV9fTwvcD4NCiAgICAgIDxkaXYgY2xhc3M9ImhvdGRlYWxzX19jYXRlZ29yeSI+DQogICAgICAgIHt7c3RhcnN9fQ0KICAgICAgPC9kaXY+DQogICAgPC9kaXY+DQogICAgPGRpdiBjbGFzcz0iaG90ZGVhbHNfX2Zvb3Rlci1jb2x1bW4gaG90ZGVhbHNfX2Zvb3Rlci1jb2x1bW4tLXNlY29uZCI+DQogICAgICA8ZGl2IGNsYXNzPSJob3RkZWFsc19fYm9keS1wcmljZSI+DQogICAgICAgIDxwIGNsYXNzPSJob3RkZWFsc19fcHJpY2UiPjxzcGFuPnt7cHJpY2V9feKCrDwvc3Bhbj4v0YfQtdC7PC9wPg0KICAgICAgICA8cCBjbGFzcz0iaG90ZGVhbHNfX3ByaWNlLW9sZCI+e3tvbGRQcmljZX19IOKCrC/Rh9C10Ls8L3A+DQogICAgICA8L2Rpdj4NCiAgICAgIDxzdmcgY2xhc3M9ImhvdGRlYWxzX19pY29uLWNvdW50Ij4NCiAgICAgICAgPHVzZSB4bGluazpocmVmPXt7cHJpY2VDb3VudH19PjwvdXNlPg0KICAgICAgPC9zdmc+DQogICAgPC9kaXY+DQogIDwvZGl2Pg0KPC9kaXY+DQo=");
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
