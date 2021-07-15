import React from 'react';
import moment from 'moment';
import Heading from '../../components/atoms/Heading';
import OrdersTable from '../../components/organisms/MaterialTable';
import { StyledDeleted } from './StyledFilter';
import { ordersCells } from '../../helpers/tableCells';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDeletedOrders,
  getSelectedOrdersToDelete,
} from '../../redux/selectors';
import {
  removeSelectedOrdersToDelete,
  setSelectedOrdersToDelete,
} from '../../redux/actions';
import { restoreOrders } from '../../firebase/firestoreUtils';

const DeletedOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getDeletedOrders);
  const ordersToRestore = useSelector(getSelectedOrdersToDelete);

  const ordersData = orders.map(
    ({
      id,
      createTime,
      deliveryDate,
      email,
      items,
      firstName,
      lastName,
      status,
      price,
    }) => ({
      id,
      date: moment(createTime).format('DD-MM-YYYY'),
      deliveryDate: moment(deliveryDate).format('DD-MM-YYYY'),
      email,
      items: items.length,
      name: firstName,
      surname: lastName,
      status,
      price,
    })
  );

  const handleRestore = () => {
    restoreOrders(ordersToRestore);
    dispatch(removeSelectedOrdersToDelete());
  };

  return (
    <StyledDeleted>
      <Heading headingType="h1">Deleted Orders</Heading>
      <OrdersTable
        headCells={ordersCells}
        rows={ordersData}
        tableType="deleted"
        selected={useSelector(getSelectedOrdersToDelete)}
        setSelected={(value) => dispatch(setSelectedOrdersToDelete(value))}
        actionBtn="restore"
        onRestoreFn={handleRestore}
      />
    </StyledDeleted>
  );
};

export default DeletedOrders;
