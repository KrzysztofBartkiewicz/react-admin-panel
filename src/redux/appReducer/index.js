import actionsTypes from './actions/actionsTypes';

const initialState = {
  isModalOpen: false,
  isDialogOpen: false,
  currentOrderId: '',
  isOrderEdited: false,
  anchor: null,
  imageAddress: '',
  selectedOrders: [],
  selectedOrdersToDelete: [],
  selectedItems: [],
  orders: [],
  deletedOrders: [],
  weather: null,
  currentUser: null,
  adminUser: null,
};

const appReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case actionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    case actionsTypes.SET_IS_ORDER_EDITED:
      return {
        ...state,
        isOrderEdited: payload,
      };

    case actionsTypes.SET_DELETED_ORDERS:
      return {
        ...state,
        deletedOrders: payload,
      };

    case actionsTypes.SET_CURRENT_ORDER_ID:
      return {
        ...state,
        currentOrderId: payload,
      };

    case actionsTypes.HANDLE_MODAL_VISIBILITY:
      return {
        ...state,
        isModalOpen: payload,
      };

    case actionsTypes.HANDLE_DIALOG_VISIBILITY:
      return {
        ...state,
        isDialogOpen: payload,
      };

    case actionsTypes.SET_ANCHOR:
      return {
        ...state,
        anchor: payload,
      };

    case actionsTypes.SET_IMAGE_ADDRESS:
      return {
        ...state,
        imageAddress: payload,
      };

    case actionsTypes.SET_SELECTED_ORDERS:
      return {
        ...state,
        selectedOrders: payload,
      };

    case actionsTypes.SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: payload,
      };

    case actionsTypes.SET_SLECTED_ORDERS_TO_DELETE:
      return {
        ...state,
        selectedOrdersToDelete: payload,
      };

    case actionsTypes.REMOVE_SELECTED_ORDERS:
      return {
        ...state,
        selectedOrders: [],
      };

    case actionsTypes.REMOVE_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: [],
      };

    case actionsTypes.REMOVE_SELECTED_ORDERS_TO_DELETE:
      return {
        ...state,
        selectedOrdersToDelete: [],
      };

    case actionsTypes.SET_WEATHER:
      return {
        ...state,
        weather: payload,
      };

    case actionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case actionsTypes.SET_ADMIN_USER:
      return {
        ...state,
        adminUser: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
