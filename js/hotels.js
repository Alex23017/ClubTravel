import { A as API_VARIABLES } from "./variables.js";
import { g as getPublicResource } from "./api.js";
async function getHotelById(id) {
  try {
    const res = await getPublicResource(`${API_VARIABLES.BASE_URL}/api/list-hotels/${id}?populate[openList][populate][openListSelect]=true&populate[img]=true`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching hotel with id ${id}:`, error);
  }
}
export {
  getHotelById as g
};
