import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '@store/store';
import '@styles/index.css';
import App from '@containers/App';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


