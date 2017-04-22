import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class Greeting extends React.Component{

  constructor(props, {currentUser}){
    super(props);
  }

  render(){
    if (this.props.currentUser){
      return(
        <Redirect to={`/users/${this.props.currentUser.id}`} />
      )

    } else {
      return(
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div key="greetings" className="greeting">
            <div className="parallax">
              <h1 className="logo">subtotal</h1>
              <div className="user-buttons">
                <Link to="/login"><RaisedButton to="/login" key="loginbutton2" id="login" className="landing" label="Login"></RaisedButton></Link>
                <Link to="/signup"><RaisedButton to="/signup" key="signupbutton2" id="signup" className="landing" label="Sign Up"></RaisedButton></Link>
              </div>
            </div>
            <section className="features">
              <h1 className="filler">FEATURES</h1>
            </section>
            <div className="about">
              <h1 className="filler">ABOUT</h1>
            </div>
          </div>
        </MuiThemeProvider>
      )
    }
  }

}
