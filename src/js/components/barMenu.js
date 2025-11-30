if (document.querySelector('[data-component="barMenu"]')) {
  import('/styles/components/barMenu.scss')
  import('/styles/base/reset.scss')
  import('/styles/components/resultCalendar.scss')
}

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import Swiper from 'swiper'
import { getCalendarPrice } from '../api/service/calendarPrice'
import resultCalendar from '../../html/components/resultSearch/resultCalendar.html'

function sliderInit() {
  const slider = document.querySelector('.mySwiperCalendar')

  if (slider) {
    new Swiper('.mySwiperCalendar', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 4,
      spaceBetween: 46,

      navigation: {
        nextEl: '.swiper__calendar-next',
        prevEl: '.swiper__calendar-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 25,
        },

        600: {
          slidesPerView: 2,
          spaceBetween: 25,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },

        1365: {
          slidesPerView: 4,
          spaceBetween: 46,
        },
      },
    })
  }
}

const data = await getCalendarPrice()

export function renderOffer() {
  const container = document.querySelector('.calendar-wrapper')
  if (!container) return
  data.forEach(item => {
    const offerCard = resultCalendar({
      month: item.month,
      price: item.price,
      secondPrice: item.secondPrice,
    })
    container.appendChild(offerCard)
  })
}

// ВЫБОР В ИНПУТАХ ЗНАЧЕНИЯ
function setupDropdown(dropdownId) {
  const btn = document.getElementById(dropdownId)
  if (!btn) return

  const menu = btn.parentElement.querySelector('.dropdown-menu')
  if (!menu) return

  const items = menu.querySelectorAll('.dropdown-item')
  if (!items) return

  items.forEach(item => {
    item.addEventListener('click', () => {
      btn.textContent = item.textContent
    })
  })
}
setupDropdown('dropdownBarPrice')
setupDropdown('dropdownBarLow')

const btnOpenCalendar = document.querySelector('.bar__calendar')
const calendarContainer = document.querySelector('.calendar__container')
const barSort = document.querySelector('.bar__sort')
const barCalendarText = document.querySelector('.bar__calendar-text')
const barCalendarTextOpen = document.querySelector('.bar__calendar-text--open')
const barHotel = document.querySelector('.bar__hotel')
const arrowNext = document.querySelector('.swiper__calendar-next')
const arrowPrev = document.querySelector('.swiper__calendar-prev')
const calendarTitle = document.querySelector('.calendar__container-title')
const addOpenArray = [
  btnOpenCalendar,
  calendarContainer,
  barSort,
  barCalendarText,
  barCalendarTextOpen,
  barHotel,
  arrowNext,
  arrowPrev,
  calendarTitle,
]

function addOpen(array) {
  btnOpenCalendar.addEventListener('click', () => {
    array.forEach(item => {
      item.classList.toggle('open')
    })
  })
}
renderOffer()
sliderInit()
addOpen(addOpenArray)
