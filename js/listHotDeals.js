const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/listHotDeals.css","css/reset.css"])))=>i.map(i=>d[i]);
import{_}from"./main2.js";import{g as f}from"./listHotel.js";/* empty css             *//* empty css     */import"./oneHotelOffer.js";import"./variables.js";import"./api.js";import"./skeleton.js";document.querySelector('[data-component="listHotDeals"]')&&(_(()=>Promise.resolve({}),__vite__mapDeps([0])),_(()=>Promise.resolve({}),__vite__mapDeps([1])));const h=await f();function g(s){const t=s.target.closest(".href__button-select");if(!t)return;const e=t.dataset.id;e&&(window.location.href=`/ClubTravel/html/pages/oneHotel.html?id=${e}`)}const a=document.querySelector(".hotdeals__render"),n=document.querySelector(".hotdeals__render-mob");a&&a.addEventListener("click",g);function y(){if(!a||!n)return;const s=t=>{let e="";for(let l=0;l<t;l++)e+='<svg class="hotdeals__category-star"><use xlink: href = "#icon-star-shiny" ></ ></svg > ';return e};h.forEach(t=>{const e=t.img[0].url,l=t.openList.map(o=>{const v=(o.openListSelect||[]).map(i=>`
        <div class="list__select">
          <div class="list__select-hotel">
            <p class="list__hotel">→ ${i.hotel}</p>
            <p class="list__category">${s(i.category)}</p>
            <p class="list__food">${i.food}</p>
            <p class="list__tour">${i.tour}</p>
            <p class="list__price list__price--open">от <strong>${i.price}€</strong>/чел.</p>
            <p class="href__button-select" data-id="${t.documentId}">Выбрать</p>
          </div>
        </div>
      `).join("");return`
        <div class="list__body-select">
          <div class="list__body-category">
            <p class="list__hotel">${o.hotel}</p>
            <p class="list__category">${s(o.category)}</p>
            <p class="list__food">${o.food}</p>
            <p class="list__tour">${o.tour}</p>
            <p class="list__price list__price--open">от <strong>${o.price}€</strong>/чел.</p>
            <p class="list__button-select" data-default="Выбрать">Выбрать</p>
          </div>

          ${v}

          <div class="list__body-hotel">
            <p class="list__hotel">${o.hotel}</p>
            <p class="list__category">${s(o.category)}</p>
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
          <p class="list__data">${t.data}</p>
          <p class="list__from">${t.from}</p>
          <p class="list__to">${t.to}</p>
          <p class="list__duration">${t.duration} дней</p>
          <p class="list__price">от <strong>${t.price}€</strong>/чел.</p>
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

    `,u=`
      <div class="list__container">
      <img src=${e} alt="card">
      <p>${t.title}</p>
      <div class="hotdeals__icon-value">
      <svg class="hotdeals__icon-price">
    <use xlink:href=${t.priceValue}></use>
    </svg>
    </div>
      </div>
    `;a.insertAdjacentHTML("beforeend",c),n.insertAdjacentHTML("beforeend",u)})}y();document.querySelectorAll(".list__container");const d=document.querySelectorAll(".list__button"),p=document.querySelectorAll(".list__button-close");p&&p.forEach(s=>{s.addEventListener("click",()=>{const t=s.closest(".list__container");t&&t.classList.remove("active"),s.classList.remove("active")})});d&&d.forEach(s=>{s.addEventListener("click",()=>{const t=s.closest(".list__container");t&&(t.classList.toggle("active"),s.classList.toggle("active")),s.classList.contains("active")?(s.textContent="Закрыть",s.style.color="black"):(s.textContent="Открыть",s.style.color="")})});const r=document.querySelectorAll(".list__button-select"),m=document.querySelectorAll(".list__body-close");r.forEach(s=>s.dataset.default=s.textContent);r.forEach(s=>{s.addEventListener("click",()=>{r.forEach(c=>{c.classList.remove("active"),c.innerHTML=c.dataset.default}),document.querySelector(".list__body-category").classList.toggle("open"),s.classList.add("active"),s.innerHTML=`<span>Открыть предложения</span>  <svg class='list__arrow-close'>
            <use xlink:href='#icon-arrowClose'></use>
            </svg>`;const t=s.closest(".list__open");if(!t)return;t.querySelectorAll(".list__body-select").forEach(c=>c.classList.remove("active"));const l=s.closest(".list__body-select");l&&l.classList.add("active")})});m.forEach(s=>{s.addEventListener("click",()=>{const t=s.closest(".list__body-select");t&&t.classList.remove("active"),document.querySelectorAll(".list__body-category").forEach(e=>e.classList.remove("open")),r.forEach(e=>{e.classList.remove("active"),e.innerHTML=e.dataset.default})})});
