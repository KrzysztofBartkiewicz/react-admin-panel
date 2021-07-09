import React from 'react';
import Heading from '../../components/atoms/Heading';
import DataTable from '../../components/organisms/Table';
import { StyledOrders } from './StyledOrders';

const Orders = () => {
  return (
    <StyledOrders>
      <Heading headingType="h1">Orders</Heading>
      <DataTable />
    </StyledOrders>
  );
};

export default Orders;
