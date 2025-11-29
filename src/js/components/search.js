if (document.querySelector('[data-component="search"]')) {
  import('/styles/components/search.scss')
  import('/styles/base/reset.scss')
}

import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

const svgRadio = `<svg class="tour__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
          fill="none">
        <path d="M6.66667 0C2.99067 0 0 2.99067 0 6.66667C0 10.3427 2.99067 13.3333
          6.66667 13.3333C10.3427 13.3333 13.3333 10.3427 13.3333 6.66667C13.3333 2.99067 10.3427 0 6.66667 0ZM5.334 9.60867L2.85867 7.13867L3.8 6.19467L5.33267
          7.72467L8.862 4.19533L9.80467 5.138L5.334 9.60867Z" fill="currentColor"/>
      </svg>`

const regions = [
  { id: 'Albena', label: 'Албена', name: 'region', value: 1 },
  { id: 'Bansco', label: 'Банско', name: 'region', value: 2 },
  { id: 'Burgas', label: 'Бургас', name: 'region', value: 3 },
  { id: 'Dune', label: 'Дюны', name: 'region', value: 4 },
  { id: 'Elinite', label: 'Елините', name: 'region', value: 5 },
  { id: 'GoldenSands', label: 'Золотые пески', name: 'region', value: 6 },
  { id: 'Kranevo', label: 'Кранево', name: 'region', value: 7 },
  { id: 'Nesebr', label: 'Несебр', name: 'region', value: 8 },
  { id: 'Obzor', label: 'Обзор', name: 'region', value: 9 },
  { id: 'Pomirie', label: 'Помирие', name: 'region', value: 10 },
  { id: 'Ravda', label: 'Равда', name: 'region', value: 11 },
  { id: 'Rivera', label: 'Ривьера', name: 'region', value: 12 },
  { id: 'Sarafovo', label: 'Сарафово', name: 'region', value: 13 },
]
const packageTour = [
  { id: 'package', label: 'Туристический пакет', name: 'tourOption', value: 1 },
  { id: 'fly', label: 'Только перелет', name: 'tourOption', value: 2 },
]
const flyFrom = [
  { id: 'Talin', label: 'Таллин', name: 'flyFrom', value: 1 },
  { id: 'Riga', label: 'Рига', name: 'flyFrom', value: 2 },
  { id: 'Vilnos', label: 'Вильнюс', name: 'flyFrom', value: 3 },
]
const foodTour = [
  { id: 'none', label: 'Без питания', name: 'foodTour', value: 1 },
  { id: '1', label: 'Завтрак', name: 'foodTour', value: 2 },
  { id: '1+1', label: 'Затрак и ужин', name: 'foodTour', value: 3 },
  { id: '1+1+1', label: 'Завтрак, обед, ужин', name: 'foodTour', value: 4 },
  { id: 'all', label: 'Всё включено', name: 'foodTour', value: 5 },
  { id: 'ultraAll', label: 'Ультра: всё включено', name: 'foodTour', value: 6 },
]

export function renderPackage() {
  const regionContainer = document.querySelector('.tour__package-tour')

  if (!regionContainer) return

  regionContainer.innerHTML = packageTour
    .map(
      ({ id, label, value }) => `
      <div class="tour__body tour__body__package">
        <input type="radio" id="${id}" name="tourOption" value="${value}" />
        ${svgRadio}
        <label for="${id}">${label}</label>
      </div>
    `
    )
    .join('')
}
export function renderFood() {
  const regionContainer = document.querySelector('.food__render')
  if (!regionContainer) return

  regionContainer.innerHTML = foodTour
    .map(
      ({ id, label, value }) => `
      <div class="tour__body tour__body__food">
        <input type="radio" id="${id}" name="foodTour" value="${value}" />
        ${svgRadio}
        <label for="${id}">${label}</label>
      </div>
    `
    )
    .join('')
}
export function renderRegions() {
  const regionContainer = document.querySelector('.tour__package-regions')
  if (!regionContainer) return

  regionContainer.innerHTML = regions
    .map(
      ({ id, label, value }) => `
      <div class="tour__body tour__body__region">
        <input type="radio" id="${id}" name="region" value="${value}" />
        ${svgRadio}
        <label for="${id}">${label}</label>
      </div>
    `
    )
    .join('')
}
export function renderFlyFrom() {
  const regionContainer = document.querySelector('.advance__fly')
  if (!regionContainer) return

  regionContainer.innerHTML = flyFrom
    .map(
      ({ id, label, value }) => `
      <div class="tour__body tour__body__fly">
        <input type="radio" id="${id}" name="flyFrom" value="${value}" />
        ${svgRadio}
        <label for="${id}">${label}</label>
      </div>
    `
    )
    .join('')
}

// КАЛЕНДАРЬ
export function SearchRender() {
  renderRegions()
  renderPackage()
  renderFood()
  renderFlyFrom()
  const data = document.querySelector('.search__data')
  if (data) {
    const fp = flatpickr(data, {
      locale: Russian,
      altInput: true,
      disableMobile: 'true',
      altFormat: 'd F Y',
      dateFormat: 'Y-m-d',
      noCalendarIcon: true,
    })
    const calendarOpen = document.querySelector('.search__calendar')
    if (calendarOpen) {
      calendarOpen.addEventListener('click', () => {
        fp.open()
      })
    }
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
  setupDropdown('dropdownDestinations')
  setupDropdown('dropdownDuration')
  setupDropdown('dropdownGuests')

  // Рассширеный поиск
  const containerSearch = document.querySelector('.search')
  const menuSearch = document.querySelector('.advanced__menu')
  const bar = document.querySelector('.bar')
  if (containerSearch) {
    containerSearch.addEventListener('click', e => {
      if (e.target.closest('.advanced__search') || e.target.closest('.search__footer-img')) {
        menuSearch.classList.add('open')
        if (bar) {
          bar.classList.add('open')
        }
      }
      if (e.target.closest('.adanced__close')) {
        menuSearch.classList.remove('open')
        if (bar) {
          bar.classList.remove('open')
        }
      }
    })
  }

  // radio
  const renderTour = document.getElementById('render__tour')

  function selectRadio(groupSelector) {
    const select = document.querySelectorAll(groupSelector)

    select.forEach(el => {
      el.addEventListener('click', () => {
        select.forEach(item => item.classList.remove('active'))
        el.classList.add('active')
        renderTour.innerHTML = ''

        const allGroups = ['.tour__body__package', '.tour__body__region', '.tour__body__fly', '.tour__body__food']
        allGroups.forEach(group => {
          document.querySelectorAll(group + '.active').forEach(activeEl => {
            renderTour.innerHTML += activeEl.innerHTML
          })
        })
      })
    })
  }
  selectRadio('.tour__body__package')
  selectRadio('.tour__body__region')
  selectRadio('.tour__body__fly')
  selectRadio('.tour__body__food')

  //RATING

  const rater = document.querySelector('.rater')
  const stars = document.querySelectorAll('.rater-star')
  const inputId = rater.dataset.input
  const ratingInput = document.getElementById(inputId)
  const renderCategory = document.getElementById('render__category')

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = star.dataset.value
      const isActive = star.classList.toggle('active')
      ratingInput.value = value
      console.log('Выбран рейтинг:', value)

      const existing = renderCategory.querySelector(`.selected__rating[data-value="${value}"]`)

      if (isActive) {
        if (!existing) {
          renderCategory.insertAdjacentHTML(
            'beforeend',
            `<div class="selected__rating"  data-value="${value}"><p> ${value} звезд</p></div>`
          )
        }
      } else if (existing) existing.remove()
    })
  })

  const slider = document.querySelector('.slider')
  const range = document.querySelector('.range')
  const leftThumb = document.querySelector('.thumb.left')
  const rightThumb = document.querySelector('.thumb.right')
  const leftValue = document.querySelector('.left-value')
  const rightValue = document.querySelector('.right-value')

  const min = 200
  const max = 3000
  const total = max - min

  // Преобразование цены ↔ процент
  const priceToPercent = price => ((price - min) / total) * 100
  const percentToPrice = percent => Math.round(min + (percent / 100) * total)

  // Инициализация
  let leftPrice = 400
  let rightPrice = 2000

  const updateSlider = () => {
    const leftPercent = priceToPercent(leftPrice)
    const rightPercent = priceToPercent(rightPrice)

    leftThumb.style.left = `${leftPercent}%`
    rightThumb.style.left = `${rightPercent}%`
    range.style.left = `${leftPercent}%`
    range.style.right = `${100 - rightPercent}%`

    leftValue.textContent = `${leftPrice}€`
    rightValue.textContent = `${rightPrice}€`
  }

  // Перетаскивание
  const startDrag = (e, thumb) => {
    e.preventDefault()
    const isLeft = thumb.classList.contains('left')
    const rect = slider.getBoundingClientRect()

    const onMove = moveEvent => {
      const clientX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX
      let percent = ((clientX - rect.left) / rect.width) * 100
      percent = Math.max(0, Math.min(100, percent))

      const newPrice = percentToPrice(percent)

      if (isLeft) {
        leftPrice = Math.min(newPrice, rightPrice)
      } else {
        rightPrice = Math.max(newPrice, leftPrice)
      }

      updateSlider()
    }

    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', onUp)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('touchend', onUp)
  }

  leftThumb.addEventListener('mousedown', e => startDrag(e, leftThumb))
  rightThumb.addEventListener('mousedown', e => startDrag(e, rightThumb))
  leftThumb.addEventListener('touchstart', e => startDrag(e, leftThumb), { passive: false })
  rightThumb.addEventListener('touchstart', e => startDrag(e, rightThumb), { passive: false })

  updateSlider()
}
SearchRender()
