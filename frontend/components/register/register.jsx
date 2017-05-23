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
    this.items = [];
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

  formatRegister(){
    let r = this.props.register;
    let items = [];
    for(let i in r){
      let img_url = r[i].img_url || "http://www.alt-codes.net/images/dollar-sign.png";
      items.push(
        <div key={"item-"+i} className="col-sm-4 col-md-3">
          <div className="thumbnail">
            <img src={img_url} alt={r[i].name} className="img-fluid register-img"></img>
            <div className="caption">
              <h3>{r[i].name}</h3>
              <p>${r[i].price}</p>
              <p>
                <a href="#" className="btn btn-primary" role="button">Edit</a>
                <a href="#" className="btn btn-default" role="button">Discount</a>
                <a href="#" className="btn btn-default" role="button">Del</a>
              </p>
            </div>
          </div>
        </div>
    )}
    this.items = items;
  }

  render(){
    this.formatRegister();
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
          <div>{this.items}</div>
          <RaisedButton label="+" onTouchTap={this.addItem} className="col-sm-4 col-md-3 add-btn"/>
          <RegisterContainer open={this.state.open} close={this.closeDialog} />
        </div>
      );
    }
  }

}
