import 'swiper/css'
import 'swiper/css/pagination'
import '../../styles/base/main.scss'
import '../../styles/pages/oneHotel.scss'
import '../../styles/pages/tourRequest.scss'
import { Navigation, Pagination } from 'swiper/modules'
import OfferCard from '../../html/components/oneHotel/oneHotelOffer.html'
import Swiper from 'swiper'
import { addUserOrder } from '../api/service/createOffer.js'
import { getHotelById, getHotelByIdSearch } from '../api/service/hotels'
import { getListHotel } from '../api/service/listHotel.js'

import hotDealsCard from '../../html/components/home/hotDealsCard.html'

let dataHotel = null
let dataSearch = null

const params = new URLSearchParams(window.location.search)
const hotelId = params.get('id')
const type = params.get('type')

if (type === 'hotel') {
  dataHotel = await getHotelById(hotelId)
}
if (type === 'search') {
  dataSearch = await getHotelByIdSearch(hotelId)
}

export function renderHotelOffers() {
  const container = document.querySelector('.hotel__offer')
  if (!container) return

  const source = dataHotel || dataSearch

  if (!source) return

  const offerCard = OfferCard({
    night: 7,
    from: source.from ?? source.town,
    food: source.food ?? 'Завтраки',
    houses: source.package ?? 'Стандарт',
    prices: source.price ?? source.price,
  })
  return container.appendChild(offerCard)
}

const data = await getListHotel()

export function sliderInit() {
  const slider = document.querySelector('.mySwiperHotDeals')

  if (slider) {
    new Swiper('.mySwiperHotDeals', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 25,

      navigation: {
        nextEl: '.swiper__hotdeals-next',
        prevEl: '.swiper__hotdeals-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 26,
        },
      },
    })
  }
}
export function renderOffer() {
  const container = document.querySelector('.hotdeals__container')
  if (!container) return

  data.forEach(item => {
    let getStars = ''
    for (let i = 0; i < item.stars; i++) {
      getStars += `
      <svg class="hotdeals__category-star">
      <use xlink:href="#icon-star-shiny"></use>
      </svg>`
    }

    const offerCard = hotDealsCard({
      img: item.img[0].url,
      data: item.data,
      location: item.location,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice,
      priceCount: item.priceCount,
      stars: getStars,
    })

    container.appendChild(offerCard)
  })
}

renderHotelOffers()
renderOffer()
sliderInit()

async function createOffer() {
  const number = Date.now()
  const date = new Date().toISOString()

  const userId = localStorage.getItem('userId')

  if (!userId) {
    console.log('не авторизований користувач')
    window.location.href = '/ClubTravel/html/pages/authorization.html?tab=authorization'
    return
  }

  const newOrder = {
    orderNumber: number,
    orderPrice: 679,
    orderStatus: false,
    orderDate: date,
    users_permissions_user: userId,
  }

  try {
    await addUserOrder(userId, newOrder)
    console.log('замовлення додано')
  } catch (err) {
    console.log('error:', err)
  }
}

const btn = document.querySelector('.hotel__offer-button')
if (btn) {
  btn.addEventListener('click', createOffer)
}
