if (document.querySelector('[data-component="winterTours"]')) {
  import('/styles/components/winterTours.scss')
  import('/styles/base/reset.scss')
}

import 'swiper/css'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import { API_VARIABLES } from '../api/variables.js'
import Swiper from 'swiper'
if (document.querySelector('[data-component="hotDeals"]')) {
  import('/styles/components/hotDeals.scss')
  import('/styles/base/reset.scss')
}
import { getWinterTours } from '../api/service/winterTours.js'
import winterToursCard from '../../html/components/home/winterToursCard.html'

function sliderInit() {
  const slider = document.querySelector('.mySwiperWinterTours')

  if (slider) {
    new Swiper('.mySwiperWinterTours', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        navigation: {
        nextEl: '.swiper__winter-next',
        prevEl: '.swiper__winter-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    })
  }
}
const data = await getWinterTours()

export function renderOffer() {
  const container = document.querySelector('.wintertours__container')
  if (!container) return

  data.forEach(item => {
    const offerCard = winterToursCard({
      img: API_VARIABLES.IMG_URL + item.img[0].url,
      town: item.town,
      price: item.price,
    })

    container.appendChild(offerCard)
  })
}
sliderInit()
renderOffer()
