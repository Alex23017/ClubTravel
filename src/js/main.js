import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '../styles/base/main.scss'

const components = import.meta.glob('./components/*.js')

document.querySelectorAll('[data-component]').forEach(el => {
  const name = el.dataset.component
  if (!name) return

  const importPath = `./components/${name}.js`
  if (components[importPath]) {
    components[importPath]().catch(err => {
      console.warn(`Ошибка загрузки компонента ${name}:`, err)
    })
  } else {
    console.warn(`Компонент ${name}.js не найден`)
  }
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

document.addEventListener('DOMContentLoaded', () => {
  function isLoggedIn() {
    return localStorage.getItem('Logged') === 'true'
  }
  const profile = document.querySelectorAll('.profile__body-img')

  profile.forEach(prof =>
    prof.addEventListener('click', () => {
      if (isLoggedIn()) {
        window.location.replace('/html/pages/profile.html')
      } else {
        window.location.replace('/html/pages/authorization.html?tab=authorization')
      }
    })
  )
})
