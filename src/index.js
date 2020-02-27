import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import store from './store/index';
import './assets/light-bootstrap.css?v=1.3.0';
import Dashboard from './layouts/dashboard';

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route to="/" component={Dashboard} key="Home"/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);