import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
	// This sintax works, but it can be optimized for Redux Forms
	// renderInput(formProps) {
	// 	return <input type="text" onChange={formProps.input.onChange} value={formProps.input.values} />;
	// }

	// formProps: the Field element gets triggered with any change and updates the store with the input values automatically, those values are available trough the props system inside our class component. In the renderInput function we are destructuring the formProps or the props object that is fed into the even that generates the Field component itself
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label htmlFor={input.name}>{label}</label>
				<input type="text" {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="error">{error}</div>
				</div>
			);
		}
	}

	/* formProps: the form element gets triggered with any submit and updates the store witht the input values automatically, those values are available trough the props system inside our class component */
	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			/* The error class, says to Semantic UI that it should enable any error message that appears inside the form, otherwise it would apply display: none and prevent the element to appear. /*
			/* The .handleSubmit method, comes from the react-form package and it wraps some functionality around our onSubmit helper function. Among the functionalities, it prevents the default behaviour of the browser to reload the website after submit. It enables us not having to write the event.preventDefault() method inside our onSubmit helper function. */
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" label="Enter title" component={this.renderInput} />
				<Field name="description" label="Enter description" component={this.renderInput} />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

// Validation

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}

	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);
