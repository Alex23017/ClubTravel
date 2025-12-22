if (document.querySelector('[data-component="summerTours"]')) {
  import('/styles/components/summerTours.scss')
  import('/styles/base/reset.scss')
}

import { getSummerTours } from '../api/service/summerTours.js'
import summerToursCard from '../../html/components/home/summerToursCard.html'

async function sliderInit() {
  const slider = document.querySelector('.mySwiperSummerTours')
  if (!slider) return
  const [{ default: Swiper }, { Navigation, Pagination }] = await Promise.all([
    import('swiper'),
    import('swiper/modules'),
  ])

  await import('swiper/css')
  await import('swiper/css/pagination')

  new Swiper('.mySwiperSummerTours', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper__summer-next',
      prevEl: '.swiper__summer-prev',
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
const data = await getSummerTours()

export function renderOffer() {
  const container = document.querySelector('.summertours__container')
  if (!container) return

  data.forEach(item => {
    const offerCard = summerToursCard({
      img: item.img[0].url,
      town: item.town,
      price: item.price,
    })

    container.appendChild(offerCard)
  })
}
sliderInit()
renderOffer()
