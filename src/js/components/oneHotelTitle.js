// if (document.querySelector('[data-component="oneHotelTitle"]')) {
//   import('/styles/components/oneHotel.scss');
//   import('/styles/base/reset.scss');
// }

import OneHotelTitle from '../../html/components/oneHotel/oneHotelTitle.html'
import { getHotelById } from '../api/service/hotels';
// const dataHotel = {
//   hotelName: 'AMBASSADOR',
//   address: 'Болгария, Золотые Пески',
//   rating: 4,
//   features: ['WiFi', 'Parking', 'Pool'],

// };
const params = new URLSearchParams(window.location.search);
const hotelId = params.get('id');


const dataHotel = await getHotelById(hotelId);

function renderCard(data) {

  const container = document.querySelector('.hotel__card');

  if (!container) return;
  let stars = '';
  for (let i = 1; i < 3; i++) {
    stars += ` <svg class="hotel__card-star">
        <use xlink:href='#icon-star-shiny'></use>
      </svg>`;
  } 
  
  const oneHotelTitle = OneHotelTitle({
    name:data.from,
    stars: stars,
    address:data.location,
    
  }) 
  container.appendChild(oneHotelTitle);
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





