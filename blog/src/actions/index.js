import axios from 'axios';
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		await dispatch(fetchPost());

		const userIds = _.uniq(_.map(getState().posts, 'userId'));
		userIds.forEach((id) => {
			return dispatch(fetchUser(id));
		});
	};
};

export const fetchPost = () => {
	return async (dispatch) => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

		dispatch({
			type: 'FETCH_POST',
			payload: data
		});
	};
};

export const fetchUser = (userId) => {
	return async (dispatch) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

		dispatch({
			type: 'FETCH_USER',
			payload: data
		});
	};
};

// Function refactoring taking advantage of arrow function ES6 syntax:

// export const fetchPost = async () => async (dispatch) => {
// const response = await axios.get('/post', {
// 			params: {
// 				baseURL: 'https://jsonplaceholder.typicode.com/'
// 			}
// 		});

// 		dispatch({
// 			type: 'FETCH_POST',
// 			payload: response
// 		});
// }
