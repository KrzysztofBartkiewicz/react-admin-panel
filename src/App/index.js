import React, { useContext, useEffect, useState } from 'react';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import Router from '../router';
import axios from 'axios';
import {
  allOrdersCollection,
  deletedOrdersCollection,
} from '../firebase/firestoreUtils';
import { useDispatch } from 'react-redux';
import {
  setDeletedOrders,
  setOrders,
  setWeather,
} from '../redux/appReducer/actions';
import { setThreads } from '../redux/gmailReducer/actions';
import { getOWEndpoint } from '../helpers/urls';
import ordersData from '../data/data.json';
import { Auth2Context } from '../context';
import { fetchThreads } from '../utils/gmail';

const App = () => {
  const dispatch = useDispatch();
  const { adminUser } = useContext(Auth2Context);

  useEffect(() => {
    if (adminUser) {
      fetchThreads()
        .then((threads) => dispatch(setThreads(threads)))
        .catch((err) => console.log(err));
    }
  }, [adminUser]);

  useEffect(() => {
    // const subscribeAllOrders = allOrdersCollection.onSnapshot((snapshot) => {
    //   const dataFromOrdersCollections = snapshot.docs.map((doc) => {
    //     return {
    //       ...doc.data(),
    //     };
    //   });
    //   dispatch(setOrders(dataFromOrdersCollections));
    // });

    // const subscribeDeletedOrders = deletedOrdersCollection.onSnapshot(
    //   (snapshot) => {
    //     const dataFromDeletedOrdersCollection = snapshot.docs.map((doc) => {
    //       return {
    //         ...doc.data(),
    //       };
    //     });
    //     dispatch(setDeletedOrders(dataFromDeletedOrdersCollection));
    //   }
    // );
    dispatch(setOrders(ordersData));

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
