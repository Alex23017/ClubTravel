import axios from 'axios';


// export async function addUserOrder(userId, orderData) {
//   const token = localStorage.getItem('token');

//   // 1. Get current user orders
//   const user = await axios.get(
//     `http://localhost:1337/api/users/${userId}`,
//     { headers: { Authorization: `Bearer ${token}` } }
//   );

//   const currentOrders = user.data.order || [];

//   // 2. Append new order
//   const updatedOrders = [...currentOrders, orderData];

//   // 3. Save to Strapi
//   await axios.put(
//     `http://localhost:1337/api/users/${userId}`,
//     { order: updatedOrders },
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
// }

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

