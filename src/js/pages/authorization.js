import '../../styles/pages/authorization.scss'

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