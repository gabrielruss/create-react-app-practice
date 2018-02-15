import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Router } from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'
import Header from './components/common/Header';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router routes={Header} history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
