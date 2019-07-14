import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';//importando Bootstrap
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
window.jQuery = window.$ = $;
require('datatables');

ReactDOM.render(
  <App />,
  document.getElementById('root')

);
