import axios from 'axios'

export async function addUserOrder(userId, newOrder) {
  const token = localStorage.getItem('token')

  try {
    const res = await axios.post(
      'https://favorable-horses-250ddbd43e.strapiapp.com/api/orders',
      { data: newOrder },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    console.log('created ', res.data)
    return res.data
  } catch (err) {
    console.error('error:', err)
  }
}
