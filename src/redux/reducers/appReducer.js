import actionsTypes from '../actions/actionsTypes';

const initialState = {
  app: {
    currentCustomerId: false,
  },
};

const appReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case actionsTypes.HANDLE_ITEMS_MODAL_VISIBILITY:
      return {
        ...state,
        app: {
          ...state.app,
          currentCustomerId: payload,
        },
      };

    default:
      return state;
  }
};

export default appReducer;
