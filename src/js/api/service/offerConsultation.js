// offer-consultation
import axios from 'axios'
import { API_VARIABLES } from '../variables'
export async function addUserConsultation(newOrder) {
  // const token = localStorage.getItem('token')

  try {
    const res = await axios.post(
      //
      'https://favorable-horses-250ddbd43e.strapiapp.com/api/offer-consultations',

      { data: newOrder },
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          Authorization: `Bearer ${API_VARIABLES.API_TOKEN}`,
        },
      }
    )

    console.log('created ', res.data)
    return res.data
  } catch (err) {
    console.error('error:', err)
  }
}
