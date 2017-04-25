import React from 'react';
import { Redirect } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CurrencyInput from 'react-currency-input';

export default class AddItem extends React.Component{

  constructor(props, {currentUser}){
    super(props);
    this.state = {
      name: "",
      price: "",
      img_url: "",
      description: "",
      item_num: null,
      inventory_count: null
    }

    this.price = "$"
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  updatePrice(){
    return e => {
      toString(this.state.price)
    }
  }

  render(){
      return(
        <Dialog open={this.props.open} onRequestClose={this.props.close}>
          <h1>Add Item</h1>
          <TextField
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="Name"
            className="username-field" />

            <TextField
              value={this.price}
              onChange={this.updatePrice} />

            <TextField
              value={this.state.img_url}
              onChange={this.update("img_url")}
              placeholder="Image URL"
              className="username-field" />


        </Dialog>
      );
    }

}
