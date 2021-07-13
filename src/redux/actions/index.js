import actionsTypes from './actionsTypes';
import actionTypes from './actionsTypes';

export const setOrders = (orders) => ({
  type: actionTypes.SET_ORDERS,
  payload: orders,
});

export const setCurrentCustomerId = (value) => ({
  type: actionTypes.SET_CURRENT_CUSTOMER_ID,
  payload: value,
});

export const handleModalVisibility = (value) => ({
  type: actionTypes.HANDLE_MODAL_VISIBILITY,
  payload: value,
});

export const setAnchor = (value) => ({
  type: actionTypes.SET_ANCHOR,
  payload: value,
});

export const setImageAddress = (value) => ({
  type: actionTypes.SET_IMAGE_ADDRESS,
  payload: value,
});

export const setSelectedOrders = (value) => ({
  type: actionsTypes.SET_SELECTED_ORDERS,
  payload: value,
});

export const setSelectedItems = (value) => ({
  type: actionsTypes.SET_SELECTED_ITEMS,
  payload: value,
});
