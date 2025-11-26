import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';



export async function getSummerTours() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/summer-tours?populate=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching summer tours:', error);

    }
}

