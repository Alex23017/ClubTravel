import axios from 'axios'

export async function ressetPassword(data) {
  try {
    const res = await axios.post('https://natural-blessing-879c2058f8.strapiapp.com/api/auth/reset-password', data)
    return res.data
  } catch (error) {
    console.log('error:', error.response?.data)
    throw error
  }
}
