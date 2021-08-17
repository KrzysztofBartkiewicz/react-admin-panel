import React, { useEffect } from 'react';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import Router from '../router';
import axios from 'axios';
import {
  allOrdersCollection,
  deletedOrdersCollection,
} from '../firebase/firestoreUtils';
import { useDispatch } from 'react-redux';
import { setDeletedOrders, setOrders, setWeather } from '../redux/actions';
import { getOWEndpoint } from '../helpers/urls';

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

    axios
      .get(getOWEndpoint())
      .then((res) => {
        if (res.status === 200) {
          dispatch(setWeather(res.data));
        } else {
          throw new Error('OW http error: ', res.status);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <GlobalStylesTemplate>
      <Router />
    </GlobalStylesTemplate>
  );
};

export default App;
