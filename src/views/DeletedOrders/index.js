import React from 'react';
import OrdersTable from '../../components/shared/Table';
import { StyledDeleted } from './StyledFilter';
import { ordersCells } from '../../helpers/tableCells';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDeletedOrders,
  getSelectedOrdersToDelete,
} from '../../redux/appReducer/selectors';
import {
  removeSelectedOrdersToDelete,
  setSelectedOrdersToDelete,
} from '../../redux/appReducer/actions';
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
      date: createTime,
      deliveryDate,
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
