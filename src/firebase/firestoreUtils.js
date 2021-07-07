import { firestore } from './firebaseConfig';

export const allOrdersCollection = firestore.collection('allOrders');
