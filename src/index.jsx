import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react'; // Import React
import ReactDOM from 'react-dom';
import ExamplePage from './example/ExamplePage';
import './index.scss';

ReactDOM.render(
  <ExamplePage />,
  document.getElementById('root'),
);
