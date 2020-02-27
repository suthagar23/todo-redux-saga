// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

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