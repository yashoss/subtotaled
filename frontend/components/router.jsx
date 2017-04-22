import React from 'react';
import App from './app';
import { IndexRoute, hashHistory } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <App />
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
