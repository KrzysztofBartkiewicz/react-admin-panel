import { combineReducers } from 'redux';
import appReducer from './appReducer';
import gmailReducer from './gmailReducer';

const rootReducer = combineReducers({
  app: appReducer,
  gmail: gmailReducer,
});

export default rootReducer;
