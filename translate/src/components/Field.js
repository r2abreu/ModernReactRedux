import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends Component {
	static contextType = LanguageContext;

	render() {
		const text = this.context.language === 'english' ? 'Name' : 'Nombre';
		return (
			<div className="ui field">
				<label>{text}</label>
				<input type="text" />
			</div>
		);
	}
}

export default Field;
