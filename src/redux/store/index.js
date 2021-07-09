import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ordersReducer from '../reducers/ordersReducer';
import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers({
  ordersReducer,
  appReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
