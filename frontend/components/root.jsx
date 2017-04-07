import React from 'react';
import { Provider } from 'react-redux';
import { IndexRoute, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './app'
import AppRouter from './router.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={ store }>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
