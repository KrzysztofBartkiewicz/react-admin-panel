import React, { useEffect } from 'react';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import Router from '../router';
import {
  allOrdersCollection,
  deletedOrdersCollection,
} from '../firebase/firestoreUtils';
import { useDispatch } from 'react-redux';
import { setDeletedOrders, setOrders } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribeAllOrders = allOrdersCollection.onSnapshot((snapshot) => {
      const dataFromOrdersCollections = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      dispatch(setOrders(dataFromOrdersCollections));
    });

    const subscribeDeletedOrders = deletedOrdersCollection.onSnapshot(
      (snapshot) => {
        const dataFromDeletedOrdersCollection = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });
        dispatch(setDeletedOrders(dataFromDeletedOrdersCollection));
      }
    );
  }, []);

  return (
    <GlobalStylesTemplate>
      <Router />
    </GlobalStylesTemplate>
  );
};

export default App;
