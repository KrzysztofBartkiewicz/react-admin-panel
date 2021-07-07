import React, { useEffect } from 'react';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import Router from '../router';
import { connect } from 'react-redux';
import { getOrders } from '../redux/actions';
import { allOrdersCollection } from '../firebase/firestoreUtils';

const App = ({ getOrders }) => {
  useEffect(() => {
    const subscribe = allOrdersCollection.onSnapshot((snapshot) => {
      const dataFromOrdersCollections = snapshot.docs.map((doc) => {
        return {
          orderId: doc.id,
          ...doc.data(),
        };
      });
      getOrders(dataFromOrdersCollections);
    });
  }, []);

  return (
    <GlobalStylesTemplate>
      <Router />
    </GlobalStylesTemplate>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getOrders: (orders) => dispatch(getOrders(orders)),
});

export default connect(null, mapDispatchToProps)(App);
