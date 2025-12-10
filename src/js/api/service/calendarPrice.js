import { API_VARIABLES } from '../variables.js';
import { getPublicResource } from '../api';


export async function getCalendarPrice() {
    try {
        const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/calendars?populate=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching company news:', error);

    }
}
