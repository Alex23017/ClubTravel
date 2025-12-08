import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';
import { skeleton } from '../../main.js';



export async function getWinterTours() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/winter-tours?populate=*`);
    if (res) {
      skeleton('.wintertours__container', '.skeleton__card')
    }
        return res.data;
    }
    catch (error) {
        console.error('Error fetching winter tours:', error);

    }
}

