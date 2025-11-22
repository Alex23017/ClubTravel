import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';



export async function getAllHotDeals() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/hot-deals?populate=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching hot deals:', error);

    }
}

