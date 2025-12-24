import { getListHotel } from '../api/service/listHotel'
if (document.querySelector('[data-component="listHotDeals"]')) {
  import('/styles/components/listHotDeals.scss')
  import('/styles/base/reset.scss')
}
import '/styles/components/listHotDeals.scss'
import '/styles/base/reset.scss'

const data = await getListHotel()

function onSelectHotelClick(e) {
  const btn = e.target.closest('.href__button-select')
  if (!btn) return
  const id = btn.dataset.id
  if (!id) return
  // window.location.href = `/ClubTravel/html/pages/oneHotel.html?id=${id}`
  window.location.href = `/ClubTravel/html/pages/oneHotel.html?id=${id}`
}
const container = document.querySelector('.hotdeals__render')
const containerMob = document.querySelector('.hotdeals__render-mob')
if (container) {
  container.addEventListener('click', onSelectHotelClick)
}

function renderOffer() {
  if (!data) return
  if (!container || !containerMob) return
  const getStarsHtml = category => {
    let stars = ''
    for (let i = 0; i < category; i++) {
      stars += '<svg class="hotdeals__category-star"><use xlink: href = "#icon-star-shiny" ></ ></svg > '
    }
    return stars
  }

  data.forEach(item => {
    const imgUrl = item.img[0].url
    const openListHtml = item.openList
      .map(open => {
        const openListSelectHtml = (open.openListSelect || [])
          .map(
            select => `
        <div class="list__select">
          <div class="list__select-hotel">
            <p class="list__hotel">→ ${select.hotel}</p>
            <p class="list__category">${getStarsHtml(select.category)}</p>
            <p class="list__food">${select.food}</p>
            <p class="list__tour">${select.tour}</p>
            <p class="list__price list__price--open">от <strong>${select.price}€</strong>/чел.</p>
            <p class="href__button-select" data-id="${item.documentId}">Выбрать</p>
          </div>
        </div>
      `
          )
          .join('')

        return `
        <div class="list__body-select">
          <div class="list__body-category">
            <p class="list__hotel">${open.hotel}</p>
            <p class="list__category">${getStarsHtml(open.category)}</p>
            <p class="list__food">${open.food}</p>
            <p class="list__tour">${open.tour}</p>
            <p class="list__price list__price--open">от <strong>${open.price}€</strong>/чел.</p>
            <p class="list__button-select" data-default="Выбрать">Выбрать</p>
          </div>

          ${openListSelectHtml}

          <div class="list__body-hotel">
            <p class="list__hotel">${open.hotel}</p>
            <p class="list__category">${getStarsHtml(open.category)}</p>
            <p class="list__food">${open.food}</p>
            <p class="list__tour">${open.tour}</p>
            <p class="list__price list__price--open">от <strong>${open.price}€</strong>/чел.</p>
            <p class="list__body-close">
              Скрыть предложения
              <svg class="list__arrow-close">
                <use xlink:href="#icon-arrowClose"></use>
              </svg>
            </p>
          </div>
        </div>
      `
      })
      .join('')

    const cardHtml = `
      <div class="list__container">
      <div class="list__img">
      </div>
        <div class="list__body">
          <p class="list__data">${item.data}</p>
          <p class="list__from">${item.from}</p>
          <p class="list__to">${item.to}</p>
          <p class="list__duration">${item.duration} дней</p>
          <p class="list__price">от <strong>${item.price}€</strong>/чел.</p>
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

              ${openListHtml}
            </div>
          </div>
        </div>
      </div>

    `
    const cardHtmlMob = `
      <div class="list__container">
      <img src=${imgUrl} alt="card">
      <p>${item.title}</p>
      <div class="hotdeals__icon-value">
      <svg class="hotdeals__icon-price">
    <use xlink:href=${item.priceValue}></use>
    </svg>
    </div>
      </div>
    `

    container.insertAdjacentHTML('beforeend', cardHtml)
    containerMob.insertAdjacentHTML('beforeend', cardHtmlMob)
  })
}

renderOffer()

const listContainer = document.querySelectorAll('.list__container')
const listButton = document.querySelectorAll('.list__button')
const listButtonClose = document.querySelectorAll('.list__button-close')

if (listButtonClose) {
  listButtonClose.forEach(el => {
    el.addEventListener('click', () => {
      const currentContainer = el.closest('.list__container')
      if (currentContainer) {
        currentContainer.classList.remove('active')
      }
      el.classList.remove('active')
    })
  })
}

if (listButton) {
  listButton.forEach(el => {
    el.addEventListener('click', () => {
      const currentContainer = el.closest('.list__container')
      if (currentContainer) {
        currentContainer.classList.toggle('active')
        el.classList.toggle('active')
      }

      if (el.classList.contains('active')) {
        el.textContent = 'Закрыть'
        el.style.color = 'black'
      } else {
        el.textContent = 'Открыть'
        el.style.color = ''
      }
    })
  })
}
const selectBtn = document.querySelectorAll('.list__button-select')
const closeBody = document.querySelectorAll('.list__body-close')

selectBtn.forEach(btn => (btn.dataset.default = btn.textContent))

selectBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    selectBtn.forEach(item => {
      item.classList.remove('active')
      item.innerHTML = item.dataset.default
    })
    document.querySelector('.list__body-category').classList.toggle('open')

    btn.classList.add('active')
    btn.innerHTML = `<span>Открыть предложения</span>  <svg class='list__arrow-close'>
            <use xlink:href='#icon-arrowClose'></use>
            </svg>`

    const currentOpen = btn.closest('.list__open')
    if (!currentOpen) return

    const allBodies = currentOpen.querySelectorAll('.list__body-select')
    allBodies.forEach(b => b.classList.remove('active'))

    const activeBody = btn.closest('.list__body-select')
    if (activeBody) activeBody.classList.add('active')
  })
})

closeBody.forEach(btn => {
  btn.addEventListener('click', () => {
    const activeBody = btn.closest('.list__body-select')
    if (activeBody) activeBody.classList.remove('active')
    document.querySelectorAll('.list__body-category').forEach(el => el.classList.remove('open'))
    selectBtn.forEach(item => {
      item.classList.remove('active')
      item.innerHTML = item.dataset.default
    })
  })
})
