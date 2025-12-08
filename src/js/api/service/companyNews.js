import { API_VARIABLES } from '../variables.js'
import { getResource } from '../api'
import { skeleton } from '../../main.js'

export async function getCompanyNews() {
  try {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/api/company-news?populate=*`)
    if (res) {
      skeleton('.news__container', '.skeleton__card')
    }
    return res.data
  } catch (error) {
    console.error('Error fetching company news:', error)
  }
}
