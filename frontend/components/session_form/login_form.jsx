import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

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

	componentDidUpdate(){
		console.log('update');
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		console.log("redirect");
		if (this.props.loggedIn){
			return(<Redirect to="/" />	)
		}
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
			console.log(this.props.loggedIn)
			if (this.props.loggedIn){
				return(<Redirect to="/" />	);
			}else{
				return (
					<div className="login-form-container">
						<form onSubmit={this.handleSubmit} className="login-form-box">
							<h4 className="login-greet">Login to $ubtotal!</h4>
							<br/>
							<div className="login-form">
								<br />

									<input type="text"
										value={this.state.username}
										onChange={this.update("username")}
										placeholder="Username"
										className="login-input" />

								<br />
									<input type="password"
										value={this.state.password}
										onChange={this.update("password")}
										placeholder="Password"
										className="login-input" />

								<br />
								<input type="submit" className="login-submit" value="Submit" />
							</div>
						</form>
					</div>
				)}
	}

}

export default LoginForm;
