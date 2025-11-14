document.querySelectorAll("[data-component]").forEach((el) => {
  const name = el.dataset.component;
  if (!name) return;

  import(/* @vite-ignore */ `/js/components/${name}.js`)
    .catch((err) => {
      console.warn(`Компонент ${name}.js не найден`, err);
    });
});

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
