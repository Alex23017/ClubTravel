import { API_VARIABLES } from '../variables.js';
import { getPublicResource, getResource} from '../api';


export async function getAllHotels() {
    try {
        const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/hotels?populate[serviceLists][populate][list][populate][subServices]=*&populate[serviceLists][populate][position]=*&populate[serviceLists][populate][listPosition]=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching hot deals:', error);

    }
}
export async function getHotelById(id) {
    try {
        // const res = await getResource(`${API_VARIABLES.BASE_URL}/api/hotels/${id}?populate[serviceLists][populate][list][populate][subServices]=*&populate[serviceLists][populate][position]]=*&populate[serviceLists][populate][listPosition]=*`);
        const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/list-hotels/${id}?populate[openList][populate][openListSelect]=true&populate[img]=true`);
        return res.data;
    }
    catch (error) {
        console.error(`Error fetching hotel with id ${id}:`, error);
    }
}