import React, { Component } from 'react';
import ColorContext from '../context/ColorContext';
import LanguageContext from '../context/LanguageContext';

class Button extends Component {
	static contextType = LanguageContext;

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{({ language }) => (language === 'english' ? 'Submit' : 'Aceptar')}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
	}
}

export default Button;
