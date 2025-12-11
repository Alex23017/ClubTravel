import { API_VARIABLES } from '../variables.js'
import axios from 'axios'
export async function sendRessetPassword(email) {
  console.log(email)

  await axios
    .post('https://deserving-apparel-f938801c39.strapiapp.com/api/auth/forgot-password', {
      email: `${email}`,
    })
    .then(response => {
      console.log('Your user received an email')
    })
    .catch(error => {
      console.log('An error occurred:', error.response)
    })
}
