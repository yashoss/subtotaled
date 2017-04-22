import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class Greeting extends React.Component{

  constructor(props, {currentUser}){
    super(props);
  }

  render(){
    if (!this.props.currentUser){
      return(
        <Redirect to="/" />
      )
    }else {
      return(
        <div>
          <h1>Register page</h1>
          <div className="header-name">{this.props.currentUser.username}'s' Register! {this.props.currentUser.id}</div>
          <a key="getout" href="" className="logout" onClick={this.props.logout.bind(this)}>Log Out</a>
        </div>
      );
    }
  }

}
