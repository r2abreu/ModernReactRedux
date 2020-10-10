import React from 'react';

const Comment = (props) => {
	console.log(props.date);
	let str = props.date.toString();
	let formattedStr = str.substring(0, 10);
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.name}
				</a>

				<div className="metadata">
					<span className="date">{formattedStr}</span>
				</div>
				<div className="text">{props.text}</div>
			</div>
		</div>
	);
};

export default Comment;
