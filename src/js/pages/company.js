import '../../styles/pages/company.scss';
import Greeting from '../../html/components/greeting.html';
import Handlebars from 'handlebars/dist/handlebars.min.js';



// Create component with props
const template = Handlebars.compile(Greeting);
const greeting = template({ 
  title: 'Hello World!',
  message: 'Welcome t'
})
const div = document.createElement('div');
div.innerHTML = greeting;
document.body.appendChild(div.firstElementChild);




