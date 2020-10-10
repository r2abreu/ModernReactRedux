import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
	/* formProps: the form element gets triggered with any submit and updates the store witht the input values automatically, those values are available trough the props system inside our class component */
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
