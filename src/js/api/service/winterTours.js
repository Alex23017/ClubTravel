import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';



export async function getWinterTours() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/winter-tours?populate=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching winter tours:', error);

    }
}

