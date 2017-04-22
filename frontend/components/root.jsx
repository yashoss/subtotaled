import React from 'react';
import { Provider } from 'react-redux';
import { IndexRoute, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppRouter from './router.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

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
