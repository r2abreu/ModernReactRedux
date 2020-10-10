import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
const KEY = 'AIzaSyAppfEGFXMU7JW-AwxZARl43qix76jGaDw';

export default (defaultSearchTerm) => {
	const [ videos, setVideos ] = useState([]);

	useEffect(
		() => {
			search(defaultSearchTerm);
		},
		[ defaultSearchTerm ]
	);

	const search = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				// youtube API specific params
				q: term,
				part: 'snippet',
				type: 'video',
				maxResults: 5,
				key: KEY
			}
		});
		setVideos(response.data.items);
	};

	return [ videos, search ];
};
