import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onDeleteStream = () => {
		this.props.deleteStream(this.props.match.params.id);
	};

	actions() {
		return (
			<div className="actions">
				<button className="ui button negative" onClick={this.onDeleteStream}>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</div>
		);
	}

	// Conditional Rendering, it's really good to have helper methods!!!!!

	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		}

		return `Are you sure you would like to delete the ${this.props.stream.title} stream?`;
	}

	render() {
		return (
			<Modal
				// metadata={{ header: 'Delete Stream', content: 'Are you sure you would like to delete this stream?', path: '/',  }}
				header="Delete Stream"
				content={this.renderContent()}
				actions={this.actions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
