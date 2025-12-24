import { API_VARIABLES } from '../variables.js'
import axios from 'axios'
export async function sendRessetPassword(email) {
  console.log(email)

  await axios
    .post('https://dedicated-star-3092d214b1.strapiapp.com/api/auth/forgot-password', {
      email: `${email}`,
    })
    .then(response => {
      console.log('Your user received an email')
    })
    .catch(error => {
      console.log('An error occurred:', error.response)
    })
}
