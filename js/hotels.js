import { A as API_VARIABLES } from "./variables.js";
import { a as getResource } from "./api.js";
async function getHotelById(id) {
  try {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/api/hotels/${id}?populate[serviceLists][populate][list][populate][subServices]=*&populate[serviceLists][populate][position]]=*&populate[serviceLists][populate][listPosition]=*`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching hotel with id ${id}:`, error);
  }
}
export {
  getHotelById as g
};
