import 'swiper/css'
import 'swiper/css/pagination'
import '/styles/pages/oneHotel.scss';
import { Navigation, Pagination } from 'swiper/modules'
import { API_VARIABLES } from '../api/variables.js'
import OfferCard from '../../html/components/oneHotel/oneHotelOffer.html';
import Swiper from 'swiper'
import {getHotelById} from '../api/service/hotels';
import {getListHotel} from '../api/service/listHotel.js'

import hotDealsCard from '../../html/components/home/hotDealsCard.html';


const dataHotel = await getHotelById('xfmhd9zt1s4qrghz8unla56q')
export function renderHotelOffers() {
    const container = document.querySelector('.hotel__offer');
    if (!container) return;
    const offerCard = OfferCard({
    night: dataHotel.night,
    from: dataHotel.from,
    food: dataHotel.food,
    houses: dataHotel.houses,
    prices: dataHotel.price,
    })
    return container.appendChild(offerCard)
    ;
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
      img: API_VARIABLES.IMG_URL + item.img[0].url,
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
sliderInit()
renderOffer()