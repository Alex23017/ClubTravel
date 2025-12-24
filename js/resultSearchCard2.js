const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/resultSearchCard.css","css/resultSearch.css","css/reset.css"])))=>i.map(i=>d[i]);
import{_ as l}from"./main2.js";/* empty css       *//* empty css          */import{N as v,P as g}from"./pagination2.js";import{Swiper as f}from"./swiper.js";import{A as w}from"./variables.js";import{g as h}from"./api.js";import"./utils.js";const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgB7c7LDYAgDIDhYhjIbTjKJuIk6oEDLONItSScTJGHJ5P+l0Zp+ACQJOlTMca5tuO9r+5MpYMQgkPEi+YC5UdYrXXacTCCUJjnwUEJoEfsj1029XZIl680XP60xpiTARz934YRDlJUD9CEMBD0AM0IAzUD3SUoY5Ik/bEbeTRCkRpoQgYAAAAASUVORK5CYII=",u=new URLSearchParams(window.location.search),d=u.get("rating"),c=u.get("foodTour"),o=new URLSearchParams({populate:"*"}),_=[];d&&d.split(",").map(Number).forEach(s=>o.append("filters[rating][$in]",s));c&&o.set("filters[food][$eq]",c);_.length&&o.set("filters[$or]",JSON.stringify(_));async function A(){try{const e=await h(`${w.BASE_URL}/api/result-searches?${o.toString()}`);return console.log(e.data),e.data}catch(e){console.error("Error fetching result saerch:",e)}}document.querySelector('[data-component="resultSearchCard"]')&&(l(()=>Promise.resolve({}),__vite__mapDeps([0])),l(()=>Promise.resolve({}),__vite__mapDeps([1])),l(()=>Promise.resolve({}),__vite__mapDeps([2])));function m(){document.querySelector(".mySwiperResult")&&new f(".mySwiperResult",{modules:[v,g],loop:!0,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper__result-next",prevEl:".swiper__result-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}const b=await A();function y(e){const s=e.target.closest(".href__button-select");if(!s)return;const i=s.dataset.id;i&&(window.location.href=`/ClubTravel/html/pages/oneHotel.html?id=${i}`)}const a=document.querySelector(".result__container");a&&a.addEventListener("click",y);function S(){const e=s=>{let i="";for(let t=0;t<s;t++)i+='<svg class="result__star"><use xlink:href="#icon-star-shiny"></use></svg>';return i};b.forEach(s=>{const i=s.img[0].url,t=s.openResult.map(r=>`
      <div class="result__open">
        <div class="result__header open__header">
          <div class="result__header-data">

            <div class="data__title"><p>Дата</p></div>
            <div class="data__info"><p>${r.dataOpen}</p></div>
          </div>

      
          <div class="result__header-duration">
            <div class="duration__title"><p>Период</p></div>
            <div class="duration__info"><p>${r.durationOpen}</p></div>
          </div>
          <div class="result__header-food">
                <div class="food__title"><p>Питание</p></div>
            <div class="food__info"><p>${r.foodOpen}</p></div>
          </div>
          <div class="result__header-type">
              <div class="type__title"><p>Тип номера</p></div>
            <div class="type__info"><p>${r.typeOpen}</p></div>
          </div>
          <div class="result__header-place">
              <div class="place__title"><p>Мест в самолёте</p></div>
            <div class="place__info"><p>${r.placeOpen}</p></div>
          </div>
          <div class="result__header-price">
           <div class="price__title"><p>Стоимость</p></div>
            <div class="price__info"><p>${r.priceOpen}€/чел</p></div>
          </div>
         <div class="link__info"><a href="">Выбрать</a></div>
        </div>
      </div>
    `).join(""),p=`
      <div class="result__card">
        <div class="result__body">
        <div class="result__body-info"> 
          <div class="swiper mySwiperResult">
            <div class="result-wrapper swiper-wrapper">
              <div class="result__img swiper-slide">
                <img src="${i}" alt="card" loading="lazy" />
              </div>
              <div class="result__img swiper-slide">
                <img src="${i}" alt="card" loading="lazy" />
              </div>
        
            </div>
          <div class='swiper-button-next swiper__result-next'>
       
          </div>
          <div class='swiper-button-prev swiper__result-prev'>
           
          </div>
          </div>

          <div class="result__info">
            <h2 class="result__info-title">${s.tittle}
            <svg class="company__footer-img">
              <use xlink:href="#icon-arrowNews"></use>
            </svg>
            </h2>

            <div class="result__condition result__condition--mob">
            <div class="result__rating"><svg class="result__star"><use xlink:href="#icon-star-shiny"></use></svg><svg class="result__star"><use xlink:href="#icon-star-shiny"></use></svg><svg class="result__star"><use xlink:href="#icon-star-shiny"></use></svg></div>
            <div class="result__condition-body">
            <div class="result__duration">
            <svg class="result_duration-icon"><use xlink:href="#icon-iconResultClock">
            </use>
            </svg>
            <p>7 ночей</p>
            </div>
            <div class="result__package">
               <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultHome">
            </use>
              </svg>
               <p>Standard</p>
          
            </div>
              <div class="result__food">
          
            <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultSpoon">
            </use>
            </svg>
               <p>Завтрак</p>
            </div>
            <div class="result__beach">
                    <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultSun">
            </use>
              </svg>
              <p>Пляж: песок, &lt;50 m</p>
            </div>
            </div>
          </div>

            <div class="result__town">
              <svg class="result__icon-location">
                <use xlink:href="#icon-hotLocation"></use>
              </svg>
              <p class="result__town-text">${s.town}</p>
            </div>
            <p class="result__info-description">${s.description}</p>
            <div class="result__items"> 
            <a href="" class="result__items-link">Подробнее об отеле</a>
            <svg class="result__icon-arrow">
              <use xlink:href="#icon-arrowNews"></use>
            </svg>
            </div>
          </div>
          </div>
        <div class="result__body-info"> 
          <div class="result__condition">
            <div class="result__rating">${e(s.rating)}</div>
            <div class="result__duration">
            <svg class="result_duration-icon"><use xlink:href="#icon-iconResultClock">
            </use>
            </svg>
            <p>${s.duration}</p>
            </div>
            <div class="result__food">
          
            <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultSpoon">
            </use>
            </svg>
               <p>${s.food}</p>
            </div>
            <div class="result__package">
               <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultHome">
            </use>
              </svg>
               <p>${s.package}</p>
          
            </div>
            <div class="result__beach">
                    <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultSun">
            </use>
              </svg>
              <p>${s.beach}</p>
            </div>
          </div>

          <div class="result__proposition">
            <p class="result__proposition-text ">2 предложения <br> от <strong>${s.price}€</strong>/чел</p>
            <button class="result__proposition-button" type="button">открыть</button>
          </div>

    
            </div>
        </div>
        <div class="open__container">
        <div class="result__header">
        <p class="result__header-data">Дата</p>
        <p class="result__header-duration">Период</p>
        <p class="result__header-food">Питание</p>
        <p class="result__header-type">Тип номера</p>
        <p class="result__header-place">Мест в самолёте</p>
        <p class="result__header-price">Стоимость</p>
        <h4>Сортировать:</h4>
          <div class="dropdown__body dropdown__body--mob">
              <div class="bar__dropdown bar__dropdown--price list__dropdown--price">
                <div class="dropdown">
                  <button class="barprice__button" type="button" id="dropdownListPrice" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="mcvh0h">
                    Цена
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownListPrice">
                    <li class="dropdown-item">Цена</li>
                    <li class="dropdown-item">Категория</li>
                  </ul>
                  <img class="search__arrow" src="${n}" alt="arrow">
                </div>
              </div>
              <div class="bar__dropdown bar__dropdown--low list__dropdown--low">
                <div class="dropdown">
                  <button class="barprice__button" type="button" id="dropdownListLow" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="y1sqjf">
                    Возрастающий
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownListLow">
                    <li class="dropdown-item">Возрастающий</li>
                    <li class="dropdown-item">Убивающий</li>
                  </ul>
                  <img class="search__arrow" src="${n}" alt="arrow">
                </div>
              </div>
            </div>

        </div>
          ${t}
        </div>
            
      </div>
    `;a.insertAdjacentHTML("beforeend",p)})}S();m();const k=document.querySelectorAll(".result__proposition-button");k.forEach(e=>{e.addEventListener("click",()=>{const s=e.closest(".result__card"),i=s.querySelector(".open__container"),t=s.querySelector(".result__proposition");e.classList.toggle("active"),s.classList.toggle("active"),i.classList.toggle("open"),t.classList.toggle("active"),e.textContent=e.classList.contains("active")?"Закрыть":"Открыть"})});document.addEventListener("click",e=>{const s=e.target.closest(".dropdown-item");if(!s)return;const i=s.closest(".dropdown-menu");if(!i)return;const t=i.parentElement.querySelector("button");t&&(t.textContent=s.textContent.trim())});export{S as renderOffer};
