import { API_VARIABLES } from '../variables.js'
import { getResource } from '../api'
import { skeleton } from '../../main.js'

export async function getSummerTours() {
  try {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/api/summer-tours?populate=*`)
    if (res) {
      skeleton('.summertours__container', '.skeleton__card')
    }
    return res.data
  } catch (error) {
    console.error('Error fetching summer tours:', error)
  }
}
