import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
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
		if(this.props.loggedIn){
			return(<Redirect to="/" />);
		}else{
			return (
				<div className="form-container">
					<form onSubmit={this.handleSubmit} className="signup-form">
						<h4 className="form-greet">welcome to $ubtotal!</h4>
						<br/>
						{ this.renderErrors() }
						<div className="input-field">
							<br />

								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									placeholder="Username"
									className="username-input" />
							<br />

								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									placeholder="E-mail"
									className="email-input"
									id="email" />

							<br />
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									placeholder="Password"
									className="password-input" />

							<br />
							<input type="submit" className="login-submit" value="Submit" />
						</div>
					</form>
				</div>
			)}
		}

}

export default SignupForm;
