if (document.querySelector('[data-component="resultSearchCard"]')) {
  import('/styles/components/resultSearchCard.scss')
  import('/styles/pages/resultSearch.scss')
  import('/styles/base/reset.scss')
}

import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import Swiper from 'swiper'
import arrow from '../../img/search/arrow.png'
import { getResultSearch } from '../api/service/resultSearch.js'

function sliderInit() {
  const slider = document.querySelector('.mySwiperResult')

  if (slider) {
    new Swiper('.mySwiperResult', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,

      navigation: {
        nextEl: '.swiper__result-next',
        prevEl: '.swiper__result-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
}
const data = await getResultSearch()

export function renderOffer() {
  const container = document.querySelector('.result__container')
  if (!container) return

  const getStarsHtml = category => {
    let stars = ''
    for (let i = 0; i < category; i++) {
      stars += '<svg class="result__star"><use xlink:href="#icon-star-shiny"></use></svg>'
    }
    return stars
  }

  data.forEach(item => {
    const imgUrl = item.img[0].url

    const openResult = item.openResult
      .map(
        open => `
      <div class="result__open">
        <div class="result__header open__header">
          <div class="result__header-data">

            <div class="data__title"><p>Дата</p></div>
            <div class="data__info"><p>${open.dataOpen}</p></div>
          </div>

      
          <div class="result__header-duration">
            <div class="duration__title"><p>Период</p></div>
            <div class="duration__info"><p>${open.durationOpen}</p></div>
          </div>
          <div class="result__header-food">
                <div class="food__title"><p>Питание</p></div>
            <div class="food__info"><p>${open.foodOpen}</p></div>
          </div>
          <div class="result__header-type">
              <div class="type__title"><p>Тип номера</p></div>
            <div class="type__info"><p>${open.typeOpen}</p></div>
          </div>
          <div class="result__header-place">
              <div class="place__title"><p>Мест в самолёте</p></div>
            <div class="place__info"><p>${open.placeOpen}</p></div>
          </div>
          <div class="result__header-price">
           <div class="price__title"><p>Стоимость</p></div>
            <div class="price__info"><p>${open.priceOpen}€/чел</p></div>
          </div>
         <div class="link__info"><a href="">Выбрать</a></div>
        </div>
      </div>
    `
      )
      .join('')

    const cardResult = `
      <div class="result__card">
        <div class="result__body">
        <div class="result__body-info"> 
          <div class="swiper mySwiperResult">
            <div class="result-wrapper swiper-wrapper">
              <div class="result__img swiper-slide">
                <img src="${imgUrl}" alt="card" />
              </div>
              <div class="result__img swiper-slide">
                <img src="${imgUrl}" alt="card" />
              </div>
        
            </div>
          <div class='swiper-button-next swiper__result-next'>
       
          </div>
          <div class='swiper-button-prev swiper__result-prev'>
           
          </div>
          </div>

          <div class="result__info">
            <h2 class="result__info-title">${item.tittle}
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
              <p class="result__town-text">${item.town}</p>
            </div>
            <p class="result__info-description">${item.description}</p>
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
            <div class="result__rating">${getStarsHtml(item.rating)}</div>
            <div class="result__duration">
            <svg class="result_duration-icon"><use xlink:href="#icon-iconResultClock">
            </use>
            </svg>
            <p>${item.duration}</p>
            </div>
            <div class="result__food">
          
            <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultSpoon">
            </use>
            </svg>
               <p>${item.food}</p>
            </div>
            <div class="result__package">
               <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultHome">
            </use>
              </svg>
               <p>${item.package}</p>
          
            </div>
            <div class="result__beach">
                    <svg class="result_duration-icon">
            <use xlink:href="#icon-iconResultSun">
            </use>
              </svg>
              <p>${item.beach}</p>
            </div>
          </div>

          <div class="result__proposition">
            <p class="result__proposition-text ">2 предложения <br> от <strong>${item.price}€</strong>/чел</p>
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
                  <img class="search__arrow" src="${arrow}" alt="arrow">
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
                  <img class="search__arrow" src="${arrow}" alt="arrow">
                </div>
              </div>
            </div>

        </div>
          ${openResult}
        </div>
            
      </div>
    `

    container.insertAdjacentHTML('beforeend', cardResult)
  })
}

renderOffer()
sliderInit()

const btnOpen = document.querySelectorAll('.result__proposition-button')

btnOpen.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.result__card')
    const container = card.querySelector('.open__container')
    const resultProposition = card.querySelector('.result__proposition')
    btn.classList.toggle('active')
    card.classList.toggle('active')
    container.classList.toggle('open')
    resultProposition.classList.toggle('active')
    btn.textContent = btn.classList.contains('active') ? 'Закрыть' : 'Открыть'
  })
})

document.addEventListener('click', e => {
  const item = e.target.closest('.dropdown-item')
  if (!item) return

  const menu = item.closest('.dropdown-menu')
  if (!menu) return

  const btn = menu.parentElement.querySelector('button')
  if (!btn) return

  btn.textContent = item.textContent.trim()
})
