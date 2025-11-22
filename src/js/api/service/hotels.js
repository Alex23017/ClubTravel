import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';

// export function _transformHotels(data) {
//     return data.map(item => ({
//         name: item.hotelName,
//         price: item.price,
//         from: item.from,
//         stars: item.stars,
//         id: item.documentId,
//         food: item.food,
//         serviceLists: item.serviceLists,
//         // img: item.img,
//     }));
// }
export async function getAllHotels() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/hotels?populate[serviceLists][populate][list][populate][subServices]=*&populate[serviceLists][populate][position]=*&populate[serviceLists][populate][listPosition]=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching hot deals:', error);

    }
}
export async function getHotelById(id) {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/hotels/${id}?populate[serviceLists][populate][list][populate][subServices]=*&populate[serviceLists][populate][position]]=*&populate[serviceLists][populate][listPosition]=*`);
        return res.data;
    }
    catch (error) {
        console.error(`Error fetching hotel with id ${id}:`, error);
    }
}