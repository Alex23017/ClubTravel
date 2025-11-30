import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';


export async function getCalendarPrice() {
    try {
        const res = await getResource(`${API_VARIABLES.BASE_URL}/api/calendars?populate=*`);

        return res.data;
    }
    catch (error) {
        console.error('Error fetching company news:', error);

    }
}
