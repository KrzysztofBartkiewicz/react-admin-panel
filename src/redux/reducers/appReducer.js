import actionsTypes from '../actions/actionsTypes';

const initialState = {
  isModalOpen: false,
  isDialogOpen: false,
  currentCustomerId: '',
  anchor: null,
  imageAddress: '',
  selectedOrders: [],
  selectedOrdersToDelete: [],
  selectedItems: [],
  orders: [],
  deletedOrders: [],
};

const appReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case actionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    case actionsTypes.SET_DELETED_ORDERS:
      return {
        ...state,
        deletedOrders: payload,
      };

    case actionsTypes.SET_CURRENT_CUSTOMER_ID:
      return {
        ...state,
        currentCustomerId: payload,
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

    default:
      return state;
  }
};

export default appReducer;
