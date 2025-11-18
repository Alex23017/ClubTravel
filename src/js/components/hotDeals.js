import 'swiper/css'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import Swiper from 'swiper'
if (document.querySelector('[data-component="hotDeals"]')) {
  import('/styles/components/hotDeals.scss')
  import('/styles/base/reset.scss')
}

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

