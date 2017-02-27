import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Content from './Content'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Content />,
    document.getElementById('content')
);
