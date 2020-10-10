import React, { useState } from 'react';

export default (props) => {
	const [ term, setTerm ] = useState('');

	const onInputChange = (e) => {
		setTerm(e.target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		props.onTermSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label htmlFor="search">Video Search</label>
					<input type="text" value={term} name="search" onChange={onInputChange} />
				</div>
			</form>
		</div>
	);
};
