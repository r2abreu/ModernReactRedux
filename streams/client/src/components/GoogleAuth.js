import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
	componentDidMount() {
		// gapi is a variable available in the window scope
		window.gapi.load('client:auth2', async () => {
			window.gapi.client
				.init({
					clientId: '351312939832-ecikhb19r9u4pjuooq8m6lftqca2a61s.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					// event listener to listen any update in the status change, we use it to trigger a function to update our state and thus the rendering, it's perhaps the most important method to udnerstand all the signing logic
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return <div className="ui active centered inline loader" />;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />Sign In
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
