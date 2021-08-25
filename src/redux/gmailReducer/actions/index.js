import actionsTypes from './actionsTypes';

export const setThreads = (threads) => ({
  type: actionsTypes.SET_THREADS,
  payload: threads,
});

export const setLabels = (labels) => ({
  type: actionsTypes.SET_LABELS,
  payload: labels,
});

export const setIsThreadChecked = (id) => ({
  type: actionsTypes.SET_IS_THREAD_CHECKED,
  payload: id,
});
