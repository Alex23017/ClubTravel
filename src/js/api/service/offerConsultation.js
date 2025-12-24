// offer-consultation
import axios from 'axios'
import { API_VARIABLES } from '../variables' 
export async function addUserConsultation(newOrder) {
  // const token = localStorage.getItem('token')

  try {
    const res = await axios.post(
    //   'https://dedicated-star-3092d214b1.strapiapp.com/api/offer-consultation',
      'http://localhost:1337/api/offer-consultations',

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
