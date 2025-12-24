// import '../../styles/pages/authorization.scss'
import { postPublicResource } from '../api/api'
import { ressetPassword } from '../api/service/resetPassword'
import { sendRessetPassword } from '../api/service/forgotPassword'
const tabs = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.content__item')
const params = new URLSearchParams(window.location.search)
const tabFromUrl = params.get('tab')

// Перевірка чи юзей залогінений якщо так - переходим в кабінет
document.addEventListener('DOMContentLoaded', () => {
  function isLoggedIn() {
    return localStorage.getItem('Logged') === 'true'
  }
  const profile = document.querySelectorAll('.profile__body-img')

  profile.forEach(prof =>
    prof.addEventListener('click', e => {
      e.preventDefault()
      if (isLoggedIn()) {
        window.location.replace('/ClubTravel/html/pages/profile.html')
      } else {
        window.location.replace('/ClubTravel/html/pages/authorization.html?tab=authorization')
      }
    })
  )
})

function setTab(tabName) {
  content.forEach(c => c.classList.toggle('active', c.classList.contains(tabName)))
}
setTab(tabFromUrl)
tabs.forEach(tab => {
  tab.addEventListener('click', () => setTab(tab.dataset.tab))
})

const registerForm = document.getElementById('registerForm')
async function register(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const jsonData = Object.fromEntries(formData)

  if (jsonData.password !== jsonData.passwordRepeat) {
    console.log('паролі не співпадають')
    return
  }

  const res = await postPublicResource('https://dedicated-star-3092d214b1.strapiapp.com/api/auth/local/register', {
    username: jsonData.email,
    email: jsonData.email,
    password: jsonData.password,
  })

  if (res.error) {
    console.log(res.error.message)
    return
  }

  window.location.replace('/ClubTravel/html/pages/authorization.html?tab=authorization')
}
if (registerForm) {
  document.getElementById('registerForm').addEventListener('submit', register)
}
const loginForm = document.getElementById('loginForm')

async function login(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  try {
    const res = await postPublicResource('https://dedicated-star-3092d214b1.strapiapp.com/api/auth/local', {
      identifier: data.identifier,
      password: data.password,
    })

    if (res.jwt && res.user) {
      localStorage.setItem('Logged', 'true')
      localStorage.setItem('username', data.identifier)
      localStorage.setItem('userId', res.user.id)
      localStorage.setItem('token', res.jwt)
      localStorage.setItem('jwt', res.jwt)
      window.location.href = '/ClubTravel/html/pages/profile.html'
    }
  } catch (err) {
    console.error('Login failed:', err.message)
  }
}
if (loginForm) {
  document.getElementById('loginForm').addEventListener('submit', login)
}
const reset = document.getElementById('reset')
if (reset) {
  document.getElementById('reset').addEventListener('click', () => {
    const email = document.getElementById('emailReset').value
    sendRessetPassword(email)
  })
}

async function newPass(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
  if (!code) {
    console.error('No reset code in URL!')
    return
  }
  const resdata = {
    code,
    password: data.password,
    passwordConfirmation: data.passwordRepeat,
  }

  if (resdata.password !== resdata.passwordConfirmation) {
    console.error('не співпадають паролі')
    return
  }

  try {
    const res = await ressetPassword(resdata)
    console.log('reset done:', res)
  } catch (err) {
    console.error('error:', err.response?.data ?? err.message)
  }
}
const newPasswordForm = document.getElementById('newPasswordForm')
if (newPasswordForm) {
  document.getElementById('newPasswordForm').addEventListener('submit', newPass)
}
