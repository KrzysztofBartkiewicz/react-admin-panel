import actionsTypes from '../actions/actionsTypes';

const initialState = {
  isModalOpen: false,
  currentCustomerId: '',
  anchor: null,
  imageAddress: '',
  selectedOrders: [],
  selectedItems: [],
  orders: [],
};

const appReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case actionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
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

    default:
      return state;
  }
};

export default appReducer;