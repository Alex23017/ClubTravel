if (document.querySelector('[data-component="profile"]')) {
  import('/styles/components/profile.scss')
  import('/styles/base/reset.scss')
}

import { getProfile } from '../api/service/profile.js'
import profileComponent from '../../html/components/profile/profileList.html'

const data = await getProfile()

export function renderOffer() {
  const container = document.querySelector('.profile__order-render')
  if (!container) return

  data.forEach(user => {
    user.order.forEach(item => {
      const isProcessing = item.orderStatus
      const status = !isProcessing ? 'в обработке' : 'оплачено'
      const statusClass = !isProcessing ? 'processing' : 'paid'

      const offerCard = profileComponent({
        orderNumber: item.number,
        orderPrice: item.price + ".00",
        orderEmail: item.email,
        orderStatus: status,
        statusClass: statusClass,
        orderDate: item.data,
      })
      container.insertAdjacentHTML('beforeend', offerCard)
    })
  })
}
renderOffer()

const fileInput = document.getElementById('avatar')
const preview = document.getElementById('preview')

const profilePolitical = document.querySelector('.profile__political')

if (!preview.getAttribute('src')) {
  profilePolitical.classList.add('margin')
}

// загрузка аватарки + локал
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    const base64 = reader.result
    localStorage.setItem('avatar', base64)

    preview.src = base64
    preview.style.display = 'block'
    profilePolitical.classList.remove('margin')
  }
  reader.readAsDataURL(file)
})

const savedAvatar = localStorage.getItem('avatar')
if (savedAvatar) {
  preview.src = savedAvatar
  preview.style.display = 'block'
}

const profileUsername = document.querySelector('.profile__username')
const profileOrderEmail = document.querySelectorAll('.profile__list-email')
const profileLocalName = localStorage.getItem('username')
const logOut = document.querySelector('.profile__logout')

function isLoggedIn() {
  return localStorage.getItem('Logged') === 'true'
}

// Перевірка якщо незалогінений переходимо на сторінку вхід
// якщо залогінений видаляемо при кліку по кнопці

logOut.addEventListener('click', () => {
  if (isLoggedIn()) {
    localStorage.removeItem('Logged')
    localStorage.removeItem('username')
    window.location.reload()
  }
  if (!isLoggedIn()) {
    window.location.replace('/html/pages/authorization.html?tab=authorization')
  }
})

profileUsername.textContent = profileLocalName.split('@')[0]
profileOrderEmail.forEach(email => (email.textContent = profileLocalName))

// const profileOrderData = document.querySelector('.profile__order-data')
// const today = new Date()

// const day = today.getDate()

// const monthNames = [
//   "Январь", "Февраль", "Март", "Апрель",
//   "Май", "Июнь", "Июль", "Август",
//   "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
// ]
// const month = monthNames[today.getMonth()]
// const year = today.getFullYear()

// profileOrderData.textContent = `${day} ${month} ${year}`
