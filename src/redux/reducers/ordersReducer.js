import actionsTypes from '../actions/actionsTypes';

const initialState = { orders: [] };

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.GET_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;
