import React from 'react';
import { Redirect } from 'react-router-dom';
import RegisterContainer from '../add_item/add_item_container';
import RaisedButton from 'material-ui/RaisedButton';

export default class Register extends React.Component{

  constructor(props, {currentUser}){
    super(props);
    this.state = { open: false };
    this.addItem = this.addItem.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  componentDidMount(){
    this.props.requestRegister();
  }

  addItem(e){
    this.setState({open: true});
  }

  closeDialog(buttonClicked){
      this.setState({open: false});
  }

  render(){
    let test = JSON.stringify(this.props.register);
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
          <div>{test}</div>
          <RaisedButton label="+" onTouchTap={this.addItem} />
          <RegisterContainer open={this.state.open} close={this.closeDialog} />
        </div>
      );
    }
  }

}
