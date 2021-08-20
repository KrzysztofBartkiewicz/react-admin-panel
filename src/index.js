import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import Auth2ContextProvider from './providers/Auth2ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth2ContextProvider>
        <App />
      </Auth2ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
