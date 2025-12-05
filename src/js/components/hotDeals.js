import 'swiper/css'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import { API_VARIABLES } from '../api/variables.js'
import Swiper from 'swiper'
if (document.querySelector('[data-component="hotDeals"]')) {
  import('/styles/components/hotDeals.scss')
  import('/styles/base/reset.scss')
}
import { getHotDeals } from '../api/service/hotDeals.js'
import hotDealsCard from '../../html/components/home/hotDealsCard.html'

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
const data = await getHotDeals()

export function renderOffer(datas) {
  const container = document.querySelector('.hotdeals__container')
  if (!container) return

  datas.forEach(item => {
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
      title: item.hotelName,
      price: item.price,
      oldPrice: item.oldPrice,
      priceCount: item.priceCount,
      stars: getStars,
    })

    container.appendChild(offerCard)
  })
}
sliderInit() 
renderOffer(data)
