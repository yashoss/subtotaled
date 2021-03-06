import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	render() {
			if (this.props.currentUser){
				let newRoute = `/users/${this.props.currentUser.id}`;
				return(<Redirect to={`/users/${this.props.currentUser.id}`} />);
			}else{
				return (
					<div className="form-container">
						<form onSubmit={this.handleSubmit} className="login-form-box">
							<h4 className="form-greeting">Login to SUBTOTAL!</h4>
							<div className="input-field">

									<TextField
										value={this.state.username}
										onChange={this.update("username")}
										placeholder="Username"
										className="username-field"
										id="username-password"/>

									<TextField type="password"
										value={this.state.password}
										onChange={this.update("password")}
										placeholder="Password"
										className="password-field"
										id="login-password"/>

								<RaisedButton primary={true} type="submit" className="signup-submit" label="Submit" />
							</div>
						</form>
					</div>
				)}
	}

}

export default LoginForm;
