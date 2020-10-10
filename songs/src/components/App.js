import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

/* 
	Thanks to Redux, we do not need to feed the rest of the components with the state directly in the App component. Redux allows us to, store, withdraw or manipulate state / store data directly from each component
*/

export default () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className=" column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};
