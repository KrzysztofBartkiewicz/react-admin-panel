import actionsTypes from './actions/actionsTypes';

const initialState = {
  threads: [],
  labels: [],
  messages: [],
  clientInitialized: false,
};

const gmailReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case actionsTypes.SET_THREADS:
      return {
        ...state,
        threads: payload,
      };

    case actionsTypes.SET_LABELS:
      return {
        ...state,
        labels: payload,
      };

    case actionsTypes.SET_IS_THREAD_CHECKED:
      const mappedThreads = state.threads.map((thread) =>
        thread.id === payload
          ? { ...thread, isChecked: !thread.isChecked }
          : thread
      );
      return {
        ...state,
        threads: mappedThreads,
      };

    case actionsTypes.SET_CLIENT_STATUS:
      return {
        ...state,
        clientInitialized: payload,
      };

    default:
      return state;
  }
};

export default gmailReducer;
