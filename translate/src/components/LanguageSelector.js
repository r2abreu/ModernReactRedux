import React, { Component } from 'react';
import LangugageContext from '../context/LanguageContext';

class LanguageSelector extends Component {
	static contextType = LangugageContext;

	render() {
		console.log(this.context);
		return (
			<div>
				Select a language:
				<i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
				<i className="flag es" onClick={() => this.context.onLanguageChange('spanish')} />
			</div>
		);
	}
}

export default LanguageSelector;
