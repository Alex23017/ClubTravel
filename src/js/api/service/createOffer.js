import axios from 'axios';

export async function addUserOrder(userId, newOrder) {
  const token = localStorage.getItem('token');
    console.log('TOKEN:', token);
  const user = await axios.get(
    `http://localhost:1337/api/users/${userId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const currentOrders = user.data.order || [];

  const updatedOrders = [...currentOrders, newOrder];

  await axios.put(
    `http://localhost:1337/api/users-permissions/users/${userId}`,
    { order: updatedOrders },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

