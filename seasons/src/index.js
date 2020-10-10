import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
	state = {
		lat: null,
		errorMessage: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// Always if we want to update the state we use setState!!
				// Updating the state re renders the component
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	renderContent() {
		// Conditional rendering
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (this.state.lat && !this.state.errorMessage) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		} else {
			return <LoadingSpinner />;
		}
	}

	// Requirement of React
	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
