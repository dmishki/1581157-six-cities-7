import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const itemsId = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <App itemsId = { itemsId } />
  </React.StrictMode>,
  document.getElementById('root'));
