import React from 'react';
import ReactDOM from 'react-dom';

export default ({ header, content, actions, onDismiss }) => {
	return ReactDOM.createPortal(
		<div onClick={onDismiss} className="ui dimmer modals visible active">
			<div onClick={(event) => event.stopPropagation()} className="ui standard modal visible active">
				<div className="header">{header}</div>
				<div className="content">{content}</div>
				<div className="actions">{actions}</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};
