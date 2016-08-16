import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

	handleFormSubmit(formProps) {
		
	}


	
	render() {
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input type="email" placeholder="Email" { ...email } className="form-control" />
					{email.touched && email.error && <div className="error">{email.error}</div>}
				</fieldset>
				<fieldset className="form-group">
					<label>password:</label>
					<input type="password" placeholder="Password" { ...password } className="form-control" />
					{password.touched && password.error && <div className="error">{password.error}</div>}
				</fieldset>
				<fieldset className="form-group">
					<label>Confirm Password:</label>
					<input type="password" placeholder="Confirm Password" { ...passwordConfirm } className="form-control" />
					{passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign up!</button>
			</form>
		);
	}
}

function validate(formProps) {
	const errors = {};

	for ( var key in formProps) {
		if (!formProps[key]) {
			errors[key] = `Do not leave field blank`;
		}
	}

	// if(!formProps.email) {
	// 	errors.email = 'Please enter an email';
	// }

	// if(!formProps.password) {
	// 	errors.password = 'Please enter a password';
	// }

	// if(!formProps.passwordConfirm) {
	// 	errors.passwordConfirm = 'Please enter a password confirmation';
	// }

	if(formProps.password != formProps.passwordConfirm ) {
		errors.password = 'Passwords must match';
	}

	return errors;
}
export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
})(Signup);