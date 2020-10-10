import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'


class StreamShow extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
		console.log(`%c StreamShow props`, 'color: white; font-weight: bold')
		console.log(this.props)
	}



	render() {
		if(!this.props.stream) {
			return <div>Loading</div>
		}
		return(
			<div>
			{this.props.stream.title}
			{this.props.stream.description}
		</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)