import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';


export async function getProfile() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/users?populate=*`);
        return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);

    }
}
