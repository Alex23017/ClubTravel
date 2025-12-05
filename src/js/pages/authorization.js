import '../../styles/pages/authorization.scss'
import { postResource } from '../api/api';
const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.content__item');
const params = new URLSearchParams(window.location.search);
const tabFromUrl = params.get('tab');


function setTab(tabName){
    content.forEach(c => c.classList.toggle('active', c.classList.contains(tabName)));
    
}
setTab(tabFromUrl)
tabs.forEach(tab => {
    tab.addEventListener('click', () => setTab(tab.dataset.tab));
});


 

async function register(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const jsonData = Object.fromEntries(formData);

  if (jsonData.password !== jsonData.passwordRepeat) {
    console.log('паролі не співпадають');
    return;
  }

  const res = await postResource('http://127.0.0.1:1337/api/auth/local/register', {
    username: jsonData.email ,
    email: jsonData.email ,
    password: jsonData.password
  });

  if (res.error) {
    console.log(res.error.message);
    return;
  }

  if (res.jwt && res.user) {
    console.log('Successfull registration.');

    localStorage.setItem('Logged', true)
    // window.location.href = './profile.html';
  }
}


document.getElementById('registerForm').addEventListener('submit', register);

async function login(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const res = await postResource(
            'http://localhost:1337/api/auth/local',
            {
                identifier: data.identifier,
                password: data.password,
            }
        );

        if (res.jwt && res.user) {
        console.log('login done', res);

        }
       

        localStorage.setItem('Logged', 'true');

    } catch (err) {
        console.error('Login failed:', err.message);

    }
}

document.getElementById('loginForm').addEventListener('submit', login);
