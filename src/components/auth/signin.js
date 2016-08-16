import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'
class Signin extends Component {

	handleFormSubmit({ email, password }) {
		console.log(email, password);
		this.props.signinUser({ email, password });
	}
	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}
	
	render() {
		const { handleSubmit, fields: { email, password}} = this.props;
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Sign in</h3>
				</div>
				<div className="panel-body">
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset className="form-group">
							<label>Email:</label>
							<input type="email" placeholder="Email" {...email} className="form-control" />
						</fieldset>
						<fieldset className="form-group">
							<label>Password:</label>
							<input type="password" placeholder="password" {...password} className="form-control" />
						</fieldset>
						{this.renderAlert()}
						<button action="submit" className="btn btn-primary">Sign in</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);