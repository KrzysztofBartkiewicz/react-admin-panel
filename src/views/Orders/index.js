import React from 'react';
import OrdersTable from '../../components/tables/MaterialTable';
import { StyledOrders } from './StyledOrders';
import {
  handleDialogVisibility,
  handleModalVisibility,
  setCurrentOrderId,
  setIsOrderEdited,
  setSelectedOrders,
} from '../../redux/appReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getSelectedOrders } from '../../redux/appReducer/selectors';
import { ordersCells } from '../../helpers/tableCells';

const Orders = () => {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();

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
    }) => {
      return {
        id,
        date: createTime,
        deliveryDate,
        email,
        items: items.length,
        name: firstName,
        surname: lastName,
        status,
        price,
      };
    }
  );

  const handleItemsClick = (event, orderId) => {
    event.stopPropagation();
    dispatch(setCurrentOrderId(orderId));
    dispatch(handleModalVisibility(true));
  };

  const handleDeleteOrders = () => {
    dispatch(handleDialogVisibility(true));
  };

  const handleEditOrder = (event, orderId) => {
    event.stopPropagation();
    dispatch(setCurrentOrderId(orderId));
    dispatch(setIsOrderEdited(true));
  };

  return (
    <StyledOrders>
      <OrdersTable
        headCells={ordersCells}
        rows={ordersData}
        tableType="orders"
        onShowItemsFn={handleItemsClick}
        selected={useSelector(getSelectedOrders)}
        setSelected={(value) => dispatch(setSelectedOrders(value))}
        onDeleteFn={handleDeleteOrders}
        onEditFn={handleEditOrder}
      />
    </StyledOrders>
  );
};

export default Orders;
