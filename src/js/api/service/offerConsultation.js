// offer-consultation
import axios from 'axios'
import { API_VARIABLES } from '../variables' 
export async function addUserConsultation(newOrder) {
  // const token = localStorage.getItem('token')

  try {
    const res = await axios.post(
    //   'https://deserving-apparel-f938801c39.strapiapp.com/api/offer-consultation',
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
