import { API_VARIABLES } from '../variables.js';
import { getResource } from '../api';
export async function getAll() {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/hot-deals`);
    return res;

}