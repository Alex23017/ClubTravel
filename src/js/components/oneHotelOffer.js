import { addUserOrder } from '../api/service/createOffer';

// async function createOffer() {

//     const number = Math.random();
//     const date = new Date().toISOString();


//     const userId = localStorage.getItem('userId');

//     if (!userId) {
//         console.log('не авторизований користувач');
//         return;
//     }

//     const newOrder = {
//         number: Number(number),
//         price: Number(745),
//         data: date
//     };

//     try {
//         await addUserOrder(userId, newOrder);
//         console.log('замовлення додано');
//     } catch (err) {
//         console.log('error:' + err);
//     }
// }

// // document.getElementById('createOffers').addEventListener('submit', createOffer);
// const btn = document.querySelector('.hotel__offer-button');

// btn.addEventListener('click', createOffer)

// import { addUserOrder } from '../api/service/createOffer';


