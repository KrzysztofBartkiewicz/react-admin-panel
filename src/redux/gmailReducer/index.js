import actionsTypes from './actions/actionsTypes';

const initialState = {
  emails: [],
};

const gmailReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case actionsTypes.SET_EMAILS:
      return {
        ...state,
        emails: payload,
      };

    default:
      return state;
  }
};

export default gmailReducer;
