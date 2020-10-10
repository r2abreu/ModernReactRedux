import React, { useState } from 'react';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate.js';
import Route from './Route';
import Header from './Header';
import Accordion from '../components/Accordion';

const items = [
	{ title: 'What is React?', content: 'React is a front end javascript framework' },
	{ title: 'Why use React?', content: 'React is a favorute JS library amoing engineers' },
	{ title: 'How do you use React?', content: 'You use React by creating components' }
];

const options = [
	{ label: 'The Color Red', value: 'red' },
	{ label: 'The Color Green', value: 'Green' },
	{ label: 'A Shade of Blue', value: 'blue' }
];

export default () => {
	const [ selected, setSelected ] = useState(options[0]);

	return (
		<div>
			<Header />

			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/dropdown">
				<Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
