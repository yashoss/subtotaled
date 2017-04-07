import React from 'react';
import { Link, hashHistory } from 'react-router';

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
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	componentDidMount(){
		if(this.props.formType === "/guest"){
			setTimeout(() => {this.props.processForm({user: {username: "Guest", password: "password"}})}, 1000)
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

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<h4 className="login-greet">Login to Striverr!</h4>
						<br/>
						{ this.renderErrors() }
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
			)
	}

}

export default LoginForm;
