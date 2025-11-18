import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';

export function _transformHotDealsList(data) {
    return data.map(item => ({
        name: item.hotelName,
        oldPrice: item.oldPrice,
        date: item.data,
        price: item.price,
        location: item.location,
        stars: item.stars,
        img: item.img,
    }));
}

export async function getAllHotDeals() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/hot-deals?populate=*`);

        return _transformHotDealsList(res.data);
    }
    catch (error) {
        console.error('Error fetching hot deals:', error);

    }
}

