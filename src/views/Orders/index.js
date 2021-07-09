import React from 'react';
import Heading from '../../components/atoms/Heading';
import MaterialTable from '../../components/organisms/MaterialTable';
import { StyledOrders } from './StyledOrders';
import { connect } from 'react-redux';

const orderCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'items', numeric: true, disablePadding: false, label: 'Items' },
  { id: 'firstName', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'lastName', numeric: true, disablePadding: false, label: 'Surname' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
];

const Orders = ({ orders }) => {
  const ordersData = orders.map((order) => ({
    id: order.id,
    email: order.email,
    items: order.items.length,
    name: order.firstName,
    surname: order.lastName,
    status: order.status,
    price: order.price,
  }));

  return (
    <StyledOrders>
      <Heading headingType="h1">Orders</Heading>
      <MaterialTable headCells={orderCells} data={ordersData} />
    </StyledOrders>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps)(Orders);
