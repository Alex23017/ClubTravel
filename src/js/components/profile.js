if (document.querySelector('[data-component="profile"]')) {
  import('/styles/components/profile.scss')
  import('/styles/base/reset.scss')
}

import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import Swiper from 'swiper'
import { getProfile } from '../api/service/profile.js'
import profileComponent from '../../html/components/profile/profileList.html'

export let mySwiperProfile = null

export function sliderInit() {
  const slider = document.querySelector('.mySwiperProfile')
  const current = document.getElementById('current')
  const total = document.getElementById('total')

  if (slider) {
    mySwiperProfile = new Swiper('.mySwiperProfile', {
      on: {
        init(swiper) {
          total.textContent = swiper.slides.length
          current.textContent = swiper.realIndex + 1
        },
        slideChange(swiper) {
          current.textContent = swiper.realIndex + 1
        },
      },
      modules: [Navigation, Pagination],
      loop: slider.querySelectorAll('.swiper-slide').length > 1,
      slidesPerView: 1,
      spaceBetween: 25,

      navigation: {
        nextEl: '.swiper__profile-next',
        prevEl: '.swiper__profile-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

  window.mySwiperProfile = mySwiperProfile
}
sliderInit()

const data = await getProfile() || [];
console.log('data: ', data);

export function renderOffer() {
  const container = document.querySelector('.profile__order-render')
  const containerNext = document.querySelector('.profile__order-render--next')
  if (!container) return
  const orders = data.slice(0, 9)
  const orderNexts = data.slice(9, 18)
  const profileItemsLength = document.querySelector('.profile__items-length')
  mySwiperProfile.on('slideChange', () => {
    const sliderNumber = mySwiperProfile.realIndex + 1
    profileItemsLength.innerHTML = `
  Показано ${sliderNumber === 1 ? orders.length : data.length} из ${data.length}
  `
  })

  orders.forEach(item => {
    const isProcessing = item.orderStatus
    const status = !isProcessing ? 'в обработке' : 'оплачено'
    const statusClass = !isProcessing ? 'processing' : 'paid'

    const offerCard = profileComponent({
      orderNumber: item.orderNumber,
      orderPrice: item.orderPrice + '.00',
      orderStatus: status,
      statusClass: statusClass,
      orderDate: item.orderDate,
    })
    container.insertAdjacentHTML('beforeend', offerCard)
  })
  orderNexts.forEach(item => {
    const isProcessing = item.orderStatus
    const status = !isProcessing ? 'в обработке' : 'оплачено'
    const statusClass = !isProcessing ? 'processing' : 'paid'

    const offerCard = profileComponent({
      orderNumber: item.orderNumber,
      orderPrice: item.orderPrice + '.00',
      orderStatus: status,
      statusClass: statusClass,
      orderDate: item.orderDate,
    })
    containerNext.insertAdjacentHTML('beforeend', offerCard)
  })
}
renderOffer()

const fileInput = document.getElementById('avatar')
const preview = document.getElementById('preview')

const profilePolitical = document.querySelector('.profile__political')

function updateMargin() {
  if (!preview.getAttribute('src')) {
    profilePolitical.classList.add('margin')
  } else {
    profilePolitical.classList.remove('margin')
  }
}

// загрузка аватарки + локал
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    const base64 = reader.result
    localStorage.setItem('avatar', base64)

    preview.src = base64
    preview.style.display = 'block'
    profilePolitical.classList.remove('margin')
  }
  reader.readAsDataURL(file)
})

const savedAvatar = localStorage.getItem('avatar')
if (savedAvatar) {
  preview.src = savedAvatar
  preview.style.display = 'block'
}

const profileUsername = document.querySelector('.profile__username')
const profileOrderEmail = document.querySelectorAll('.profile__list-email')
const profileLocalName = localStorage.getItem('username')
const logOut = document.querySelector('.profile__logout')

function isLoggedIn() {
  return localStorage.getItem('Logged') === 'true'
}

// Перевірка якщо незалогінений переходимо на сторінку вхід
// якщо залогінений видаляемо при кліку по кнопці

logOut.addEventListener('click', () => {
  if (isLoggedIn()) {
    localStorage.removeItem('Logged')
    localStorage.removeItem('username')
    localStorage.removeItem('jwt')
    window.location.reload()
  }
  if (!isLoggedIn()) {
    window.location.replace('/html/pages/authorization.html?tab=authorization')
  }
})

profileUsername.textContent = profileLocalName.split('@')[0]
profileOrderEmail.forEach(email => (email.textContent = profileLocalName))
updateMargin()
// const profileOrderData = document.querySelector('.profile__order-data')
// const today = new Date()

// const day = today.getDate()

// const monthNames = [
//   "Январь", "Февраль", "Март", "Апрель",
//   "Май", "Июнь", "Июль", "Август",
//   "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
// ]
// const month = monthNames[today.getMonth()]
// const year = today.getFullYear()

// profileOrderData.textContent = `${day} ${month} ${year}`
console.log(localStorage.getItem('jwt'))