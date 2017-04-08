import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <Link to="/" >Subtotal</Link>
    <Route path="/" component={ GreetingContainer } />
    <Route path="/login" component={ LoginFormContainer } />
    <Route path="/signup" component={ SignupFormContainer } />
  </div>
);

export default App;
