import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = ({children}) => (
  <div>
    <h1>Subtotal</h1>
    <GreetingContainer />
    <Route path="/login" component={ LoginFormContainer } />
    <Route path="/signup" component={ SignupFormContainer } />
    { children }
  </div>
);

export default App;
