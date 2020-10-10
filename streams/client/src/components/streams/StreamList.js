import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { Link } from 'react-router-dom';

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		return this.props.currentUserId === stream.userId ? (
			<div className="right floated content">
				<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
					Edit
				</Link>
				<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
					Delete
				</Link>
			</div>
		) : null;
	}

	renderList = () => {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	renderCreateButton = () => {
		return this.props.isSignedIn ? (
			<div style={{ textAlign: 'right' }} className="right floated content">
				<Link to="/streams/new" className="ui button primary">
					Create Stream
				</Link>
			</div>
		) : null;
	};

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreateButton()}
			</div>
		);
	}
}

// We retrieve the state from the store and we map it to the component PROPS!!!!!

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);