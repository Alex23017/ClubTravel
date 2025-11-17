if (document.querySelector('[data-component="companyNews"]')) {
  import('/styles/components/companyNews.scss')
  import('/styles/base/reset.scss')
}
import 'swiper/css'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import Swiper from 'swiper'

const slider = document.querySelector('.mySwiperNews')

if (slider) {
  new Swiper('.mySwiperNews', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 28,

    navigation: {
      nextEl: '.swiper__news-next',
      prevEl: '.swiper__news-prev',
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
        spaceBetween: 28,
      },
    },
  })
}
