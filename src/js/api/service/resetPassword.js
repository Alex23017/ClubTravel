
import axios from 'axios';

export async function ressetPassword(data) {
  try {
    const res = await axios.post('http://localhost:1337/api/auth/reset-password', data);
    return res.data;
  } catch (error) {
    console.log('error:', error.response?.data);
    throw error;
  }
}
