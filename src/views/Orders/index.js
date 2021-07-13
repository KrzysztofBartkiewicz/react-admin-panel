import React from 'react';
import Heading from '../../components/atoms/Heading';
import OrdersTable from '../../components/organisms/MaterialTable';
import { StyledOrders } from './StyledOrders';
import {
  handleModalVisibility,
  removeSelectedOrders,
  setCurrentCustomerId,
  setSelectedOrders,
} from '../../redux/actions';
import { deleteOrders } from '../../firebase/firestoreUtils';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getSelectedOrders } from '../../redux/selectors';
import { ordersCells } from '../../helpers/tableCells';

const Orders = () => {
  const orders = useSelector(getOrders);
  const ordersToDelete = useSelector(getSelectedOrders);
  const dispatch = useDispatch();

  const ordersData = orders.map(
    ({ id, email, items, firstName, lastName, status, price }) => ({
      id,
      email,
      items: items.length,
      name: firstName,
      surname: lastName,
      status,
      price,
    })
  );

  const handleItemsClick = (customerId) => {
    dispatch(setCurrentCustomerId(customerId));
    dispatch(handleModalVisibility(true));
  };

  const handleDeleteOrders = () => {
    deleteOrders(ordersToDelete);
    dispatch(removeSelectedOrders());
  };

  return (
    <StyledOrders>
      <Heading headingType="h1">Orders</Heading>
      <OrdersTable
        headCells={ordersCells}
        rows={ordersData}
        tableType="orders"
        onItemsClickFn={handleItemsClick}
        selected={useSelector(getSelectedOrders)}
        setSelected={(value) => dispatch(setSelectedOrders(value))}
        onDeleteFn={handleDeleteOrders}
      />
    </StyledOrders>
  );
};

export default Orders;
