import React from 'react';

export default ({ video }) => {
	return video ? (
		<div>
			<div className="ui embed">
				<iframe title="video.snippet.title" src={`https://www.youtube.com/embed/${video.id.videoId}`} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	) : null;
};
