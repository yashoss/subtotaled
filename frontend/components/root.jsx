import React from 'react';
import { Provider } from 'react-redux';
import { IndexRoute, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './app'
import AppRouter from './router.jsx';

const Root = ({store}) => (
  <Provider store={ store }>
    <Router>
      <Route path="/" component={ App } />
    </Router>
  </Provider>
);

export default Root;
