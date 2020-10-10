import { useEffect, useState } from 'react';

export default ({ path, children }) => {
	const [ currentPath, setCurrentPath ] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		// We listen for any change in the URL

		window.addEventListener('popstate', onLocationChange);

		// We clean up by removing event listener

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	// We render the children only if the pathname is equal

	return currentPath === path ? children : null;
};
