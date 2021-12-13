import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style/index'
import Route from './route';

ReactDOM.render(
  <React.StrictMode>
    <Route />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);


