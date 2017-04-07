import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

const sessionLinks = () => (
  <nav key="login-signup" className="login-signup">
    <ul>
      <li key="loginbutton" onClick={Greeting.openModal.bind(this, "/login")} className="current">Login</li>
      <li key="signupbutton" onClick={Greeting.openModal.bind(this, "/signup")} className="current">Sign up!</li>
      <li key="guestlogin" onClick={Greeting.openModal.bind(this, "/guest")} className="current">Guest Login!</li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout, goToUser) => (
	<hgroup key="hgroup" className="header-group">
  <div key="hname"><h2 className="header-name">Hi, {currentUser.username}!</h2></div>
		<a href="" className="logout" onClick={logout}>Log Out</a>
	</hgroup>
);

export default class Greeting extends React.Component{

  constructor(props, {currentUser}){
    super(props);

    this.show = [];

    this.state={
      key: -1,
      modal: false,
      style:{
        overlay : {
          position        : 'fixed',
          top             : 80,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
          zIndex          : 999,
          transition      : "all 1s ease"
        },
        content : {
          margin          : 'auto',
          width           : '600px',
          height          : '450px',
          border          : '1px solid #ccc',
          padding         : '20px',
          backgroundColor : 'rgba(156, 174, 190, 0.79)',
          background      : 'url("http://www.mediamavenandmore.com/wp-content/uploads/2016/10/huffington-post-blog-submission-guidelines-1200x800.jpg")',
          opacity         : '0.95',
          backgroundSize  : 'cover'

        }
      }
    };

  }

  openModal(key){
    console.log("clicked");
  }

  closeModal(){
    console.log("unclicked");
  }

  componentWillReceiveProps(){
    this.closeModal();
    $(".login-signup").hide();
  }

  signupHeight(path){
    console.log(1);
  }

  loginHeight(path){
    console.log(2);
  }

  render(){
    if (this.props.currentUser){
      this.show.push(
        <hgroup key="hgroup2" className="header-group">
          <div key="hname2" className="hname2">
            <div className="header-name">Hi, {this.props.currentUser.username}!</div>
            <a key="getout" href="" className="logout" onClick={this.props.logout.bind(this)}>Log Out</a>
          </div>
        </hgroup>
      )

    } else {
      this.show.push(
        <nav key="login-signup2" className="login-signup">
          <ul key="session">
            <li key="loginbutton2" id="login" onClick={this.loginHeight.bind(this, "/login")} className="current">Login</li>
            <li key="signupbutton2" id="signup" onClick={this.signupHeight.bind(this, "/signup")} className="current">Sign up!</li>
            <li key="guestlogin2" id="guest" onClick={this.loginHeight.bind(this, "/guest")} className="current">Guest Login!</li>
          </ul>
        </nav>
      )
    }

    return(
      <div key="greetings">
        {this.show}
      </div>

    )
  }

}

// export default Greeting;
