if (document.querySelector('[data-component="sliderHeader"]')) {
  import('/styles/components/sliderHeader.scss')
  import('/styles/base/reset.scss')
}

async function sliderInit() {
  const slider = document.querySelector('.mySwiper')
  if (!slider) return
  const [{ default: Swiper }, { Navigation, Pagination }] = await Promise.all([
    import('swiper'),
    import('swiper/modules'),
  ])

  await import('swiper/css')
  await import('swiper/css/pagination')

  if (slider) {
    new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      preloadImages: true,
      lazy: false,

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
}
sliderInit()
