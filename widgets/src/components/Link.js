import React from 'react';

export default ({ className, href, children }) => {
	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		// We prevent the normal behaviour of the website to load itself again

		event.preventDefault();

		// We change the URL, but dont full page refresh

		window.history.pushState({}, '', href);

		// We communicate that the URL has changed by creating a new event by issuing a new event to the window object

		// This piece of code will allow route to update the piece of state that tracks the current path name and will rerender the state

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};
