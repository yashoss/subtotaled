import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component{

  constructor(props, {currentUser}){
    super(props);
  }

  openModal(key){
    console.log("clicked");
  }

  closeModal(){
    console.log("unclicked");
  }

  componentWillReceiveProps(){
  }

  signupHeight(path){
    console.log(1);
  }

  loginHeight(path){
    console.log(2);
  }

  render(){
    if (this.props.currentUser){
      return(
        <div key="greetings">
          <hgroup key="hgroup2" className="header-group">
            <div key="hname2" className="hname2">
              <div className="header-name">{this.props.currentUser.username}'s' Register!</div>
              <a key="getout" href="" className="logout" onClick={this.props.logout.bind(this)}>Log Out</a>
            </div>
          </hgroup>
        </div>
      )

    } else {
      return(
        <div key="greetings">
          <nav key="login-signup2" className="login-signup">
              <Link to="/login" key="loginbutton2" id="login" className="current">Login</Link>
              <Link to="/signup" key="signupbutton2" id="signup" className="current">Sign up!</Link>
          </nav>
        </div>
      )
    }
  }

}

// export default Greeting;
