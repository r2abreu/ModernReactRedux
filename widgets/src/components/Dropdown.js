import React, { useState, useEffect, useRef } from 'react';

export default ({ label, options, selected, onSelectedChange }) => {
	const [ visible, setVisible ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			// If: The form element which holds the reference contains the element we are clicking then do nothing
			if (ref.current.contains(event.target)) {
				return;
			}
			// Else: If the click falls in an element which is not enclosed the form element wich holds the reference, hide the dropdown

			setVisible(false);
		};

		document.body.addEventListener('click', onBodyClick);

		// React: useEffect() clean up to dettach the event from the body element, failure to do this will thrown an error since the element wich holds the React reference might not be rendered thus .contains cannot check a null element

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const renderedList = options.map((option) => {
		if (option === selected) {
			return null;
		} else {
			return (
				<div
					className="item"
					key={option.value}
					onClick={() => {
						onSelectedChange(option);
					}}
				>
					{option.label}
				</div>
			);
		}
	});
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setVisible(!visible)}
					className={`ui selection dropdown ${visible ? 'visible active' : ''}`}
				>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${visible ? 'visible transition' : ''}`}>{renderedList}</div>
				</div>
			</div>
		</div>
	);
};
