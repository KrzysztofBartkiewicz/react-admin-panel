import actionsTypes from './actionsTypes';
import actionTypes from './actionsTypes';

export const setOrders = (orders) => ({
  type: actionTypes.SET_ORDERS,
  payload: orders,
});

export const setIsOrderEdited = (value) => ({
  type: actionTypes.SET_IS_ORDER_EDITED,
  payload: value,
});

export const setDeletedOrders = (orders) => ({
  type: actionsTypes.SET_DELETED_ORDERS,
  payload: orders,
});

export const setCurrentOrderId = (id) => ({
  type: actionTypes.SET_CURRENT_ORDER_ID,
  payload: id,
});

export const handleDialogVisibility = (value) => ({
  type: actionTypes.HANDLE_DIALOG_VISIBILITY,
  payload: value,
});

export const handleModalVisibility = (value) => ({
  type: actionTypes.HANDLE_MODAL_VISIBILITY,
  payload: value,
});

export const setAnchor = (anchor) => ({
  type: actionTypes.SET_ANCHOR,
  payload: anchor,
});

export const setImageAddress = (imgAddress) => ({
  type: actionTypes.SET_IMAGE_ADDRESS,
  payload: imgAddress,
});

export const setSelectedOrders = (ordersIdsArr) => ({
  type: actionsTypes.SET_SELECTED_ORDERS,
  payload: ordersIdsArr,
});

export const setSelectedItems = (itemsIdsArr) => ({
  type: actionsTypes.SET_SELECTED_ITEMS,
  payload: itemsIdsArr,
});

export const removeSelectedOrders = () => ({
  type: actionsTypes.REMOVE_SELECTED_ORDERS,
});

export const removeSelectedItems = () => ({
  type: actionsTypes.REMOVE_SELECTED_ITEMS,
});

export const setSelectedOrdersToDelete = (itemsIdsArr) => ({
  type: actionTypes.SET_SLECTED_ORDERS_TO_DELETE,
  payload: itemsIdsArr,
});

export const removeSelectedOrdersToDelete = () => ({
  type: actionTypes.REMOVE_SELECTED_ORDERS_TO_DELETE,
});

export const setWeather = (weather) => ({
  type: actionTypes.SET_WEATHER,
  payload: weather,
});

export const setCurrentUser = (user) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setAdminUser = (user) => ({
  type: actionTypes.SET_ADMIN_USER,
  payload: user,
});

export const setEmails = (emails) => ({
  type: actionTypes.SET_EMAILS,
  payload: emails,
});
