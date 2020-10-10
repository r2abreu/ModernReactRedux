import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
	render() {
		if (!this.props.user) {
			return null;
		}

		return <div>{this.props.user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find((user) => {
			return user.id === ownProps.id;
		})
	};
};

export default connect(mapStateToProps)(UserHeader);
