import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SignupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.confirm_password = "";
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
		if (this.props.currentUser){
			return(<Redirect to={`/users/${this.props.currentUser.id}`} />);
		}else{
			return (
				<div className="form-container">
					<form onSubmit={this.handleSubmit} className="signup-form">
						<h4 className="form-greeting">Register for SUBTOTAL!</h4>
						<div className="input-field">

								<TextField
									value={this.state.username}
									onChange={this.update("username")}
									placeholder="Username"
									className="username-field"
									id="username-password"/>

								<TextField
									value={this.state.email}
									onChange={this.update("email")}
									placeholder="E-mail"
									className="email-input"
									id="email" />

								<TextField type="password"
									value={this.state.password}
									onChange={this.update("password")}
									placeholder="Password"
									className="password-field"
									id="login-password" />

							<FlatButton type="submit" className="login-submit" label="Submit" />
						</div>
					</form>
				</div>
			)}
		}


}

export default SignupForm;
