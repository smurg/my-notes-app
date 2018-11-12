import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap’s ready-to-use css
import 'bootstrap'; //Import Bootstrap’s JavaScript by adding this line

ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
