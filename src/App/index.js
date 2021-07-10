import React, { useEffect } from 'react';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import Router from '../router';
import { allOrdersCollection } from '../firebase/firestoreUtils';
import { useDispatch } from 'react-redux';
import { setOrders } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = allOrdersCollection.onSnapshot((snapshot) => {
      const dataFromOrdersCollections = snapshot.docs.map((doc) => {
        return {
          orderId: doc.id,
          ...doc.data(),
        };
      });
      dispatch(setOrders(dataFromOrdersCollections));
    });
  }, []);

  return (
    <GlobalStylesTemplate>
      <Router />
    </GlobalStylesTemplate>
  );
};

export default App;
