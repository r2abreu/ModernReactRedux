import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
	{ label: 'Spanish', value: 'es' },
	{ label: 'Arabic', value: 'ar' },
	{ label: 'Hindi', value: 'hi' }
];

export default () => {
	const [ language, setLanguage ] = useState(options[0]);
	const [ term, setTerm ] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="text">Enter Text</label>
					<input type="text" name="text" value={term} onChange={(event) => setTerm(event.target.value)} />
				</div>
			</div>
			<Dropdown label="Select a language" options={options} selected={language} onSelectedChange={setLanguage} />
			<h3 className="ui header"> Output</h3>
			<Convert language={language} text={term} />
		</div>
	);
};
