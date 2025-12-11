import "./oneHotelOffer.js";
import "./authorization2.js";
/* empty css             */
import "./api.js";
const tabs = document.querySelectorAll(".tab__name");
const contents = document.querySelectorAll(".tab__item");
const nextBtn = document.querySelectorAll(".tab__next");
const category = document.querySelector(".tab__category");
const categoryItem = document.querySelectorAll(".tab__category-item");
document.addEventListener("click", (e) => {
  const isButton = e.target.matches("[data-dropdown-button]") || e.target.closest("[data-dropdown-button]");
  let currentDropdown = null;
  if (isButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("open");
  }
  document.querySelectorAll("[data-dropdown].open").forEach((dropdown) => {
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove("open");
    }
  });
});
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dropdown__item")) return;
  const dropdown = e.target.closest(".dropdown");
  dropdown.querySelector(".dropdown__value").textContent = e.target.textContent;
  dropdown.classList.remove("open");
});
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".counter__btn");
  if (!btn) return;
  const counter = btn.closest("[data-counter]");
  const valueEl = counter.querySelector(".counter__value");
  let value = Number(valueEl.textContent);
  if (btn.classList.contains("counter__btn-minus")) {
    value = Math.max(1, value - 1);
  }
  if (btn.classList.contains("counter__btn-plus")) {
    value += 1;
  }
  valueEl.textContent = value;
});
function activateTab(index) {
  tabs.forEach((t) => t.classList.remove("active"));
  contents.forEach((c) => c.classList.remove("active"));
  tabs[index].classList.add("active");
  contents[index].classList.add("active");
}
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const activeIndex = [...contents].findIndex((item) => item.classList.contains("active"));
    const nextIndex = activeIndex + 1;
    activateTab(nextIndex);
  });
});
category.addEventListener("click", (e) => {
  const item = e.target.closest(".tab__category-item");
  if (!item) return;
  const index = Array.from(categoryItem).indexOf(item);
  categoryItem.forEach((tab, i) => {
    if (i <= index) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});
