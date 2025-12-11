import axios from 'axios'

export async function ressetPassword(data) {
  try {
    const res = await axios.post('https://deserving-apparel-f938801c39.strapiapp.com/api/auth/reset-password', data)
    return res.data
  } catch (error) {
    console.log('error:', error.response?.data)
    throw error
  }
}
