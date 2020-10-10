import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		// We make sure to only update those values that have changed, that's why we do not send all the values of the stream to the initialValues, just the ones that should be changed
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.stream) {
			return null;
		}
		// The props come from the react-router-dom module, trough the Link component
		const { title, description } = this.props.stream;
		return (
			<div>
				<h3>Edit a Stream</h3>
				{/* initialValues is a really important property, since it works with Redux Forms to fill in the input field with initial values for us, the name of the object properties that should be filled, need to match the Field component name attribute to fill every input  */}

				{this.props.stream ? (
					<StreamForm onSubmit={this.onSubmit} initialValues={{ title, description }} />
				) : null}
			</div>
		);
	}
}

// We retrieve the state from the store and we map it to the component PROPS!!!!!

const mapStateToProps = (state = null, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
