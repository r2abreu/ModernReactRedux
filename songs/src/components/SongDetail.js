import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
	return (
		<React.Fragment>
			{selectedSong ? (
				<div>
					<h1>{selectedSong.title}</h1>
					<p>{selectedSong.duration}</p>
				</div>
			) : (
				`Select a Song`
			)}
		</React.Fragment>
	);
};

// THIS IS THE WAY WE WITHDRAW THE STATE TO COMPONENT USING REDUX

const mapStateToProps = (state) => {
	return {
		selectedSong: state.selectedSong
	};
};

export default connect(mapStateToProps)(SongDetail);
