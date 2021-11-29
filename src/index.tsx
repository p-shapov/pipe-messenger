import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/App';

const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'ext-root');
document.getElementsByTagName('body')[0].append(rootElement);
document.body.style.width = `calc(100% - ${process.env.REACT_APP_EXTENSION_WIDTH}px)`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
