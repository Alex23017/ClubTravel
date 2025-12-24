import OneHotelTitle from '../../html/components/oneHotel/oneHotelTitle.html'
import { getHotelById, getHotelByIdSearch } from '../api/service/hotels'

const params = new URLSearchParams(window.location.search)
const hotelId = params.get('id')

let dataHotel = null
let dataSearch = null

if (hotelId) {
  dataHotel = await getHotelById(hotelId)
  if (!dataHotel) {
    dataSearch = await getHotelByIdSearch(hotelId)
  }
}

function renderCard() {
  const container = document.querySelector('.hotel__card')
  if (!container) return
  const source = dataHotel || dataSearch
  if (!source) return
  const starCount = source.stars ?? source.rating ?? 0
  let stars = ''
  for (let i = 0; i < starCount; i++) {
    stars += ` <svg class="hotel__card-star">
        <use xlink:href='#icon-star-shiny'></use>
      </svg>`
  }

  const oneHotelTitle = OneHotelTitle({
    name: source.from ?? source.tittle,
    stars: stars,
    address: source.location ?? source.town,
  })
  container.appendChild(oneHotelTitle)
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

renderCard()
