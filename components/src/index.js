import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Comment from './Comment';
import Card from './Card';

const App = () => {
	return (
		<div className="ui container comments">
			<Card>
				{/* This is the way we provide a child component as a Prop (prop.children) */}
				<Comment
					avatar={Faker.image.avatar()}
					date={Faker.date.past()}
					name={Faker.internet.userName()}
					text={Faker.random.words()}
				/>
			</Card>
			<Card>
				<Comment
					avatar={Faker.image.avatar()}
					date={Faker.date.past()}
					name={Faker.internet.userName()}
					text={Faker.random.words()}
				/>
			</Card>
			<Card>
				<Comment
					avatar={Faker.image.avatar()}
					date={Faker.date.past()}
					name={Faker.internet.userName()}
					text={Faker.random.words()}
				/>
			</Card>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
