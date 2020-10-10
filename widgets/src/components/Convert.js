import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default ({ language, text }) => {
	const [ translated, setTranslated ] = useState('Hello');
	const [ debouncedTerm, updateDebouncedTerm ] = useState(text);

	useEffect(
		() => {
			const timerId = setTimeout(() => {
				updateDebouncedTerm(text);
			}, 1000);

			return () => {
				clearTimeout(timerId);
			};
		},
		// Dependecy Array: useEffect triggered at the first time and subsequent changes of the piece of state
		[ text ]
	);

	useEffect(
		() => {
			const translate = async () => {
				const { data } = await axios.post(
					'https://translation.googleapis.com/language/translate/v2',
					{},
					{
						params: {
							q: text,
							target: language.value,
							key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
						}
					}
				);
				console.log(data.data.translations[0].translatedText);
				setTranslated(data.data.translations[0].translatedText);
			};
			if (debouncedTerm) {
				translate();
			}
		},
		[ debouncedTerm, language.value, text ]
	);

	return <h1 className="ui header">{translated}</h1>;
};
