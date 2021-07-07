import actionTypes from './actionsTypes';

export const getOrders = (orders) => ({
  type: actionTypes.GET_ORDERS,
  payload: orders,
});
