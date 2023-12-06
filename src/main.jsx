import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
