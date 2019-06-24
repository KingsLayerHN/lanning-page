import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
window.jQuery = window.$ = $;
require ('datatables');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
