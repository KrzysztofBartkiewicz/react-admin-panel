import { firestore } from './firebaseConfig';

export const allOrdersCollection = firestore.collection('allOrders');

// export const deleteOrders = (ordersArray) => {

//     ordersArray.forEach((order) => {

//     })

// }
