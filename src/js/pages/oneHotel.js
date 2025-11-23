import '/styles/pages/oneHotel.scss';
import OfferCard from '../../html/components/oneHotel/oneHotelOffer.html';
import {getHotelById} from '../api/service/hotels';

const data = await getHotelById('xfmhd9zt1s4qrghz8unla56q')
export function renderOffer() {
    const container = document.querySelector('.hotel__offer');
    if (!container) return;
    const offerCard = OfferCard({
    night: data.night,
    from: data.from,
    food: data.food,
    houses: data.houses,
    prices: data.price,
    })
    return container.appendChild(offerCard)
    ;
}
renderOffer();