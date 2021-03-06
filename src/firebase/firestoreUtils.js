import { firestore } from './firebaseConfig';

export const allOrdersCollection = firestore.collection('allOrders');
export const deletedOrdersCollection = firestore.collection('deletedOrders');
export const usersCollection = firestore.collection('users');

export const deleteOrders = (ordersArr) => {
  ordersArr.forEach((order) => {
    allOrdersCollection
      .doc(order)
      .get()
      .then((doc) => {
        const orderToDelete = doc.data();
        deletedOrdersCollection
          .doc(order)
          .set(orderToDelete, { merge: true })
          .then(() => allOrdersCollection.doc(order).delete())
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
};

export const restoreOrders = (ordersArr) => {
  ordersArr.forEach((order) => {
    deletedOrdersCollection
      .doc(order)
      .get()
      .then((doc) => {
        const orderToRestore = doc.data();
        allOrdersCollection
          .doc(order)
          .set(orderToRestore, { merge: true })
          .then(() => deletedOrdersCollection.doc(order).delete())
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
};

export const updateOrder = (orderId, price, deliveryDate, status) => {
  allOrdersCollection.doc(orderId).update({
    price,
    deliveryDate,
    status,
  });
};
