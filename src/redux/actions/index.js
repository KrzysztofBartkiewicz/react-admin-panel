import actionTypes from './actionsTypes';

export const getOrders = (orders) => ({
  type: actionTypes.GET_ORDERS,
  payload: orders,
});

export const handleItemsModalVisibility = (value) => ({
  type: actionTypes.HANDLE_ITEMS_MODAL_VISIBILITY,
  payload: value,
});
