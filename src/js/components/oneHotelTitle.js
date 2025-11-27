// if (document.querySelector('[data-component="oneHotelTitle"]')) {
//   import('/styles/components/oneHotel.scss');
//   import('/styles/base/reset.scss');
// }
import OneHotelTitle from '../../html/components/oneHotel/oneHotelTitle.html'

function setupDropdown(dropdownId) {
  const btn = document.getElementById(dropdownId);
  if (!btn) return;

  const menu = btn.parentElement.querySelector('.dropdown-menu');
  if (!menu) return;

  const items = menu.querySelectorAll('.dropdown-item');
  if (!items) return;

  items.forEach((item) => {
    item.addEventListener('click', () => {
      btn.textContent = item.textContent;
    });
  });
}

setupDropdown('dropdownGuests');
const dataHotel = {
  hotelName: 'AMBASSADOR',
  address: 'Болгария, Золотые Пески',
  rating: 4,
  features: ['WiFi', 'Parking', 'Pool'],

};
function renderCard(data) {

  const container = document.querySelector('.hotel__card');

  if (!container) return;
  let stars = '';
  for (let i = 1; i < data.rating; i++) {
    stars += ` <svg class="hotel__card-star">
        <use xlink:href='#icon-star-shiny'></use>
      </svg>`;
  }
  const oneHotelTitle = OneHotelTitle({
    name:data.hotelName,
    stars: stars,
    address:data.address,
    items: [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 29 },
    { name: 'Keyboard', price: 79 }
  ]
  }) 
  container.appendChild(oneHotelTitle);
  console.log(oneHotelTitle);
  // return container.innerHTML = `
  //    <div class="hotel__card-name">
  //     ${data.hotelName}
  //   <div class="hotel__card-more">
  //     <svg>
  //       <use xlink:href='#icon-plus-shiny'></use>
  //     </svg>
  //   </div>
  //   <div class="hotel__card-stars">
  //     ${stars}
  //   </div>
  // </div>
  // <div class="hotel__card-location">
   
  //   <svg class="hotel__card-pin">
  //       <use xlink:href='#icon-pin-grean'></use>
  //     </svg>
  //     ${data.address}
  // </div>
  // `;
}
renderCard(dataHotel);





