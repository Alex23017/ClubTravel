const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/listHotDeals.css","css/reset.css"])))=>i.map(i=>d[i]);
import{_}from"./main2.js";import{g as h}from"./listHotel.js";/* empty css             *//* empty css     */import"./variables.js";import"./api.js";import"./skeleton.js";document.querySelector('[data-component="listHotDeals"]')&&(_(()=>Promise.resolve({}),__vite__mapDeps([0])),_(()=>Promise.resolve({}),__vite__mapDeps([1])));const n=await h();function g(t){const s=t.target.closest(".href__button-select");if(!s)return;const e=s.dataset.id;e&&(window.location.href=`/ClubTravel/html/pages/oneHotel.html?id=${e}&type=hotel`)}const a=document.querySelector(".hotdeals__render"),d=document.querySelector(".hotdeals__render-mob");a&&a.addEventListener("click",g);function y(){if(!n||!a||!d)return;const t=s=>{let e="";for(let l=0;l<s;l++)e+='<svg class="hotdeals__category-star"><use xlink: href = "#icon-star-shiny" ></ ></svg > ';return e};n.forEach(s=>{const e=s.img[0].url,l=s.openList.map(o=>{const f=(o.openListSelect||[]).map(i=>`
        <div class="list__select">
          <div class="list__select-hotel">
            <p class="list__hotel">→ ${i.hotel}</p>
            <p class="list__category">${t(i.category)}</p>
            <p class="list__food">${i.food}</p>
            <p class="list__tour">${i.tour}</p>
            <p class="list__price list__price--open">от <strong>${i.price}€</strong>/чел.</p>
            <p class="href__button-select" data-id="${s.documentId}">Выбрать</p>
          </div>
        </div>
      `).join("");return`
        <div class="list__body-select">
          <div class="list__body-category">
            <p class="list__hotel">${o.hotel}</p>
            <p class="list__category">${t(o.category)}</p>
            <p class="list__food">${o.food}</p>
            <p class="list__tour">${o.tour}</p>
            <p class="list__price list__price--open">от <strong>${o.price}€</strong>/чел.</p>
            <p class="list__button-select" data-default="Выбрать">Выбрать</p>
          </div>

          ${f}

          <div class="list__body-hotel">
            <p class="list__hotel">${o.hotel}</p>
            <p class="list__category">${t(o.category)}</p>
            <p class="list__food">${o.food}</p>
            <p class="list__tour">${o.tour}</p>
            <p class="list__price list__price--open">от <strong>${o.price}€</strong>/чел.</p>
            <p class="list__body-close">
              Скрыть предложения
              <svg class="list__arrow-close">
                <use xlink:href="#icon-arrowClose"></use>
              </svg>
            </p>
          </div>
        </div>
      `}).join(""),c=`
      <div class="list__container">
      <div class="list__img">
      </div>
        <div class="list__body">
          <p class="list__data">${s.data}</p>
          <p class="list__from">${s.from}</p>
          <p class="list__to">${s.to}</p>
          <p class="list__duration">${s.duration} дней</p>
          <p class="list__price">от <strong>${s.price}€</strong>/чел.</p>
          <p class="list__button">Открыть</p>
        </div>

        <div class="list__open">
      

          <div class="list__openlist">
            <div class="list__opendeals">
              <div class="hotdeals__header">
                <h3 class="hotdeals__data">Отель</h3>
                <h3 class="hotdeals__from">Категория</h3>
                <h3 class="hotdeals__to">Питание</h3>
                <h3 class="hotdeals__duration">Состав тура</h3>
                <h3 class="hotdeals__price">Цена</h3>
              </div>

              ${l}
            </div>
          </div>
        </div>
      </div>

    `,v=`
      <div class="list__container">
      <img src=${e} alt="card">
      <p>${s.title}</p>
      <div class="hotdeals__icon-value">
      <svg class="hotdeals__icon-price">
    <use xlink:href=${s.priceValue}></use>
    </svg>
    </div>
      </div>
    `;a.insertAdjacentHTML("beforeend",c),d.insertAdjacentHTML("beforeend",v)})}y();document.querySelectorAll(".list__container");const p=document.querySelectorAll(".list__button"),u=document.querySelectorAll(".list__button-close");u&&u.forEach(t=>{t.addEventListener("click",()=>{const s=t.closest(".list__container");s&&s.classList.remove("active"),t.classList.remove("active")})});p&&p.forEach(t=>{t.addEventListener("click",()=>{const s=t.closest(".list__container");s&&(s.classList.toggle("active"),t.classList.toggle("active")),t.classList.contains("active")?(t.textContent="Закрыть",t.style.color="black"):(t.textContent="Открыть",t.style.color="")})});const r=document.querySelectorAll(".list__button-select"),m=document.querySelectorAll(".list__body-close");r.forEach(t=>t.dataset.default=t.textContent);r.forEach(t=>{t.addEventListener("click",()=>{r.forEach(c=>{c.classList.remove("active"),c.innerHTML=c.dataset.default}),document.querySelector(".list__body-category").classList.toggle("open"),t.classList.add("active"),t.innerHTML=`<span>Открыть предложения</span>  <svg class='list__arrow-close'>
            <use xlink:href='#icon-arrowClose'></use>
            </svg>`;const s=t.closest(".list__open");if(!s)return;s.querySelectorAll(".list__body-select").forEach(c=>c.classList.remove("active"));const l=t.closest(".list__body-select");l&&l.classList.add("active")})});m.forEach(t=>{t.addEventListener("click",()=>{const s=t.closest(".list__body-select");s&&s.classList.remove("active"),document.querySelectorAll(".list__body-category").forEach(e=>e.classList.remove("open")),r.forEach(e=>{e.classList.remove("active"),e.innerHTML=e.dataset.default})})});
