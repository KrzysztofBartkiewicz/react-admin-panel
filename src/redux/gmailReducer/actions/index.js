import actionsTypes from './actionsTypes';

export const setEmails = (emails) => ({
  type: actionsTypes.SET_EMAILS,
  payload: emails,
});
