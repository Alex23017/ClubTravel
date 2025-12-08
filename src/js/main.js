import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

document.querySelectorAll('[data-component]').forEach(el => {
  const name = el.dataset.component
  if (!name) return

  import(/* @vite-ignore */ `/js/components/${name}.js`).catch(err => {
    console.warn(`Компонент ${name}.js не найден`, err)
  })
})

// PRELOAD

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload')
  if (preload) {
    setTimeout(() => {
      preload.classList.remove('loading')
      document.body.classList.remove('loading')
    }, 500)
  }
})

// удаляем блок скелетона при удачном фетч запросе
export function skeleton(containerSkeleton, selector) {
  const container = document.querySelector(containerSkeleton)
  if (!container) return
  const blocks = container.querySelectorAll(selector)
  blocks.forEach(block => {
    setTimeout(() => {
      block.remove()
    }, 1000)
  })
}
// функция рендера карточек скелетона
function renderSkeleton(block, count) {
  const container = document.querySelector(block)
  if (!container) return
  container.innerHTML = ''
  for (let i = 0; i < count; i++) {
    const slide = document.createElement('div')
    slide.classList.add('skeleton__card', 'swiper-slide')
    slide.innerHTML = `
      <div class="skeleton__img"></div>
      <div class="skeleton__data"></div>
      <div class="skeleton__count"></div>
      <div class="skeleton__line"></div>
    `
    container.appendChild(slide)
  }
}
renderSkeleton('.news__container', 4)
renderSkeleton('.hotdeals__container', 4)
renderSkeleton('.wintertours__container', 5)
renderSkeleton('.summertours__container', 5)
