// import { API_VARIABLES } from './variables.js';
// import axios from 'axios';
// export async function getResource(url) {
//     try {
//         const res = await axios.get(url, {
//             headers: {
//                 Authorization: `Bearer ${API_VARIABLES.API_TOKEN}`,
//                 'Content-Type': 'application/json',
//             }
//         });

//         return res.data;
//     } catch (error) {
//         const status = error.response?.status || 'NO_STATUS';
//         throw new Error(`Could not fetch ${url}, status: ${status}`);
//     }
// }