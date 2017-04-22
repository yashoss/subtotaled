import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import RegisterContainer from './register/register_container';

class App extends React.Component{
  constructor(){
    super();
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render(){
    return(
    <div>
      <Route exact path="/" component={ GreetingContainer } />
      <Route path="/login" component={ LoginFormContainer } />
      <Route path="/signup" component={ SignupFormContainer } />
      <Route path="/users/:id" component={ RegisterContainer } />
    </div>
  )};
}

export default App;
