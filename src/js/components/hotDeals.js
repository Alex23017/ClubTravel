if (document.querySelector('[data-component="hotDeals"]')) {
  import('/styles/components/hotDeals.scss')
  import('/styles/base/reset.scss')
}
import { getListHotel } from '../api/service/listHotel.js'
import hotDealsCard from '../../html/components/home/hotDealsCard.html'

export async function sliderInit() {
  const slider = document.querySelector('.mySwiperHotDeals')
  if (!slider) return

  const [{ default: Swiper }, { Navigation, Pagination }] = await Promise.all([
    import('swiper'),
    import('swiper/modules'),
  ])

  await import('swiper/css')
  await import('swiper/css/pagination')

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

const data = await getListHotel()
function onHotelClick(e) {
<<<<<<< HEAD
  const id = e.currentTarget.dataset.id
  window.location.href = `/ClubTravel/html/pages/oneHotel.html?id=${id}`
=======
    const id = e.currentTarget.dataset.id;
    // window.location.href = `/ClubTravel/html/pages/oneHotel.html?id=${id}`;
    window.location.href = `/html/pages/oneHotel.html?id=${id}`;

>>>>>>> 05e2620189aec7853f5f475728841cfc454d28b9
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
      documentId: item.documentId,
      img: item.img[0].url,
      data: item.data,
      location: item.location,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice,
      priceCount: item.priceCount,
      stars: getStars,
    })
    offerCard.addEventListener('click', onHotelClick)
    container.appendChild(offerCard)
  })
}
sliderInit()
renderOffer()
