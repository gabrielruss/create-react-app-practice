import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import { Router } from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
      <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
