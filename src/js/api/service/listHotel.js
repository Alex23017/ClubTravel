import { API_VARIABLES } from '../variables.js'
import { getResource } from '../api'

export async function getListHotel() {
  try {
    const res = await getResource(
      `${API_VARIABLES.BASE_URL}/api/list-hotels?populate[openList][populate][openListSelect]=true&populate[img]=true`
    )

    return res.data
  } catch (error) {
    console.error('Error fetching list hotels:', error)
  }
}
export async function getListHotelMob() {
  try {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/api/list-hotels?populate=*`)

    return res.data
  } catch (error) {
    console.error('Error fetching list hotels:', error)
  }
}
