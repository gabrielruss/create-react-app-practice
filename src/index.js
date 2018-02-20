import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import { Router } from 'react-router-dom';
import configureStore from "./store/configureStore";
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const history = createBrowserHistory();
const store = configureStore();

store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();