import React from 'react';
import Link from './Link';

export default () => {
	return (
		<div className="ui secondary pointing menu">
			<Link className="item" name="Accordion" href="/">
				Accordion
			</Link>

			<Link className="item" name="Search" href="/list">
				Search
			</Link>

			<Link className="item" name="Dropdown" href="/dropdown">
				Dropdown
			</Link>

			<Link className="item" name="Translate" href="/translate">
				Translate
			</Link>
		</div>
	);
};
