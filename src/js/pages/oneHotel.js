import '/styles/pages/oneHotel.scss';
import { API_VARIABLES } from '../api/variables.js'
import OfferCard from '../../html/components/oneHotel/oneHotelOffer.html';
import {getHotDeals} from '../api/service/hotDeals.js';
import {getHotelById} from '../api/service/hotels';
import hotDealsCard from '../../html/components/home/hotDealsCard.html';
import { renderOffer, sliderInit} from '../components/hotDeals.js';

const dataHotel = await getHotelById('xfmhd9zt1s4qrghz8unla56q')
export function renderOffers() {
    const container = document.querySelector('.hotel__offer');
    if (!container) return;
    const offerCard = OfferCard({
    night: dataHotel.night,
    from: dataHotel.from,
    food: dataHotel.food,
    houses: dataHotel.houses,
    prices: dataHotel.price,
    })
    return container.appendChild(offerCard)
    ;
}
const data = await getHotDeals()

renderOffers();
sliderInit();
renderOffer(data)