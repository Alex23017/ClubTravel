import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import Swiper from 'swiper'

if (document.querySelector('[data-component="sliderHeader"]')) {
  import('/styles/components/sliderHeader.scss')
  import('/styles/base/reset.scss')
}

const slider = document.querySelector('.mySwiper')

if (slider) {
  new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-header-next',
      prevEl: '.swiper-header-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}
