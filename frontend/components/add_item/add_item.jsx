import React from 'react';
import { Redirect } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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
      item_num: "",
      inventory_count: ""
    }

    this.decimal = false;
  }

  update(property){
    return e => {
      this.setState({[property]: e.target.value});
    }
  }

  updatePrice(){
    return e =>{
      let length = this.state.price.length;
      if (e.key.charCodeAt(0) === 66 && length > 0){
        if(this.state.price[length - 1] === "."){
          this.decimal = false;
        }
        this.setState({price: this.state.price.substring(0, length - 1)});
      }else if (e.key.charCodeAt(0) !== 47 && e.key.charCodeAt(0) >= 46 && e.key.charCodeAt(0) <= 57 && length < 12){
        if(!this.decimal || (e.key !== "." && this.state.price[length - 3] !== ".")){
          if(e.key === "."){
            this.decimal = true;
          }
          this.setState({price: this.state.price + e.key});
        }
      }
    }
  }

  addItem(){
    this.props.addItem(this.state);
  }

  render(){
      const actions = [
        <FlatButton label="Save" keyboardFocused={true} onTouchTap={() => console.log("Saved")}/>,
        <FlatButton label="Cancel" onTouchTap={this.props.close}/>
      ]
      return(
        <Dialog open={this.props.open} modal={true} onRequestClose={this.props.close} actions={actions}>
          <h1>Add Item</h1>
          *<TextField
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="Name"
            className="username-field" />


            <div>*$<TextField
              value={this.state.price}
              onKeyDown={this.updatePrice()}
              placeholder="00.00"
              className="username-field" />
            </div>

              <TextField
                value={this.state.item_num}
                onChange={this.update("item_num")}
                placeholder="Item #"
                type="number"
                className="username-field" />

              <TextField
                value={this.state.inventory_count}
                onChange={this.update("inventory_count")}
                placeholder="Inventory Count"
                type="number"
                className="username-field" />

              <TextField
                value={this.state.img_url}
                onKeyDown={this.update("img_url")}
                placeholder="Image URL"
                className="username-field" />

              <TextField
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
                multiLine={true}
                className="username-field" />


        </Dialog>
      );
    }

}
