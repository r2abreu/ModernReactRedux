import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
	const [ term, updateTerm ] = useState('Samurai');
	const [ debouncedTerm, updateDebouncedTerm ] = useState(term);
	const [ results, updateResults ] = useState([]);
	const onInputChange = (event) => {
		updateTerm(event.target.value);
	};

	useEffect(
		() => {
			const timerId = setTimeout(() => {
				updateDebouncedTerm(term);
			}, 1000);

			return () => {
				clearTimeout(timerId);
			};
		},
		// Dependecy Array: useEffect triggered at the first time and subsequent changes of the piece of state
		[ term ]
	);

	useEffect(
		() => {
			const search = async () => {
				const { data } = await axios.get('https://en.wikipedia.org/w/api.php?', {
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: debouncedTerm
					}
				});
				// Update of state: Triggers component re-render
				updateResults(data.query.search);
			};

			// Check if the term is not empty, in which case the API response will be an error due to missing  search parameter
			if (debouncedTerm) {
				search();
			}
		},
		// Dependecy Array: useEffect triggered at the first time and subsequent changes of the piece of state
		[ debouncedTerm ]
	);

	const renderedList = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a
						className="ui button"
						target="_blank noopener"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.item}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }} />
				</div>
			</div>
		);
	});

	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field">
					<label htmlFor="search">Search a term</label>
					<input className="input" type="text" name="search" value={term} onChange={onInputChange} />
				</div>
			</div>
			<div className="ui celled list">{renderedList}</div>
		</div>
	);
};
