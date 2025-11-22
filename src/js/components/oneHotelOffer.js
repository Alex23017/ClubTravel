import OfferCard from '../../html/components/oneHotel/oneHotelOffer.html';

const offerCard = OfferCard({
  night: 7,
  from: 'Таллинна',
  food: 'Завтраки',
  houses: 'Стандарт',
  prices: 429,
})
// const dataHotel = {
//   hotelName: 'AMBASSADOR',
//   address: 'Болгария, Золотые Пески',
//   from: 'Таллинна',
//   food: 'Завтраки',
//   houses: 'Стандарт',
//   night: 7,
//   date: '18 июня 2020 г.',
//   rating: 4,
//   prices: 429,


// };
export function renderOffer() {
  // const container = document.querySelector('.hotel__offer');

  // if (!container) return;
  // return container.innerHTML(offerCard);
  return console.log(offerCard);
  
  // return container.innerHTML = `
  //     <div class="hotel__offer-title">
  //       <span>Выбранный тур</span>
  //       <button>изменить</button>
  //   </div>
  //   <div class="hotel__offer-dates">
  //     <div class="hotel__offer-date">
  //       <svg>
  //       <use xlink:href='#icon-calendar'></use>
  //     </svg>
  //       <span>18 июня 2020 г. | ${data.night} ночей</span>
  //     </div>
  //     <div class="hotel__offer-raise">
  //       <svg>
  //       <use xlink:href='#icon-departure'></use>
  //     </svg>
  //       <span>Вылет из ${data.from}</span>
  //     </div>
  //     <div class="hotel__offer-food">
  //       <svg>
  //       <use xlink:href='#icon-food'></use>
  //     </svg>
  //       <span>${data.food}</span>
  //     </div>
  //     <div class="hotel__offer-houses">
  //       <svg>
  //       <use xlink:href='#icon-apartment'></use>
  //     </svg>
  //       <span>${data.houses}</span>
  //     </div>
  //   <div class="hotel__offer-price">
  //      <b>${data.prices}€</b>/чел
  //   </div>
  //   <div class="hotel__offer-description">
  //   <b>Цена на одного человека </b> действительна при размещении в двухместном номере. Цена зависит от количества мест и может измениться.
  //   </div>
  //   <div class="guests">
  //     <label for="guests">Количество отдыхающих</label>
  //     <div class="dropdown">
  //       <button class="guests__button" type="button" id="dropdownGuests" data-bs-toggle="dropdown" aria-expanded="false">
  //         Взрослых: 2; детей: 1
  //       </button>
  //       <ul class="dropdown-menu" aria-labelledby="dropdownGuests" style="width: 95%;">
  //         <li class="dropdown-item">Взрослых: 2; детей: 1</li>
  //         <li class="dropdown-item">Взрослых: 2; детей: 2</li>
  //         <li class="dropdown-item">Взрослых: 2; детей: 3</li>
  //         <li class="dropdown-item">Взрослых: 2; детей: 4</li>
  //       </ul>
  //       <img class="search__arrow" src="/img/search/arrow.png" alt="arrow">
  //     </div>
  //   </div>
  //   <div class="hotel__offer-people">
  //       <div class="hotel__offer-item">
  //       Взрослых x2
  //       </div>
  //       <div class="hotel__offer-item">
  //       15 лет x1
  //       </div>
  //       <div class="hotel__offer-item">
  //       3 года x1
  //       </div>
  //       <div class="hotel__offer-item">
  //       10 лет х3
  //       </div>
  //   </div>
  // <div class="hotel__offer-total">
  //     Общая стоимость тура:
  //   <span>
  //     <b>1 429€</b>
  //   </span>
  // </div>
  //   <button class="hotel__offer-button button-primary">
  //     Бронировать
  //   </button>
  //   <div class="hotel__offer-policy">
  //   <svg>
  //     <use xlink:href='#icon-policy-lock'></use>
  //   </svg>
  //     <div>
  //     Ваши данные надежно защищены и обрабатываются согласно с 
  //     <span>
      
  //     условиями обработки личных данных
  //     </span>

  //     </div>
  //   </div>
  // </div>
  // `;
}
renderOffer();