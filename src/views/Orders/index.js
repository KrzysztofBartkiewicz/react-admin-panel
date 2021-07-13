import React from 'react';
import Heading from '../../components/atoms/Heading';
import OrdersTable from '../../components/organisms/MaterialTable';
import { StyledOrders } from './StyledOrders';
import {
  handleModalVisibility,
  setCurrentCustomerId,
  setSelectedOrders,
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getSelectedOrders } from '../../redux/selectors';

const orderCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'items', numeric: true, disablePadding: false, label: 'Items' },
  { id: 'firstName', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'lastName', numeric: true, disablePadding: false, label: 'Surname' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
];

const Orders = () => {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();

  const ordersData = orders.map((order) => ({
    id: order.id,
    email: order.email,
    items: order.items.length,
    name: order.firstName,
    surname: order.lastName,
    status: order.status,
    price: order.price,
  }));

  const handleItemsClick = (customerId) => {
    dispatch(setCurrentCustomerId(customerId));
    dispatch(handleModalVisibility(true));
  };

  return (
    <StyledOrders>
      <Heading headingType="h1">Orders</Heading>
      <OrdersTable
        headCells={orderCells}
        rows={ordersData}
        tableType="orders"
        onItemsClickFn={handleItemsClick}
        selected={useSelector(getSelectedOrders)}
        setSelected={(value) => dispatch(setSelectedOrders(value))}
      />
    </StyledOrders>
  );
};

export default Orders;
