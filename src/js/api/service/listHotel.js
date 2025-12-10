import { API_VARIABLES } from '../variables.js'
import { getPublicResource } from '../api'
import { skeleton } from '../../main.js'

export async function getListHotel() {
  try {
    const res = await getPublicResource(
      `${API_VARIABLES.BASE_URL}/api/list-hotels?populate[openList][populate][openListSelect]=true&populate[img]=true`
    )
    if (res) {
      skeleton('.hotdeals__container', '.skeleton__card')
    }

    return res.data
  } catch (error) {
    console.error('Error fetching list hotels:', error)
  }
}
