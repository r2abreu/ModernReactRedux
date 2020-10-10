import streams from '../apis/streams';
// Importing the action object type string
import { SIGN_IN, SIGN_OUT, CREATE_STREAMS, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM } from './types';
import history from '../history';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = (formValues) => {
	return async (dispatch, getState) => {
		const { userId } = getState().auth;
		// The following line is really important, since the second argument of the request function ({...formValues, userId}) are the one that shape the way the data looks in our database
		const response = await streams.post('/streams', { ...formValues, userId });
		dispatch({
			type: CREATE_STREAMS,
			payload: response.data
		});
		// With this line, we programatically navigate our user, using the history object we created to replace BrowserHistory
		history.push('/');
	};
};

export const fetchStreams = () => {
	return async (dispatch) => {
		const response = await streams.get(`/streams/`);
		dispatch({
			type: FETCH_STREAMS,
			payload: response.data
		});
	};
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		const response = await streams.get(`/streams/${id}`);
		dispatch({
			type: FETCH_STREAM,
			payload: response.data
		});
	};
};

export const editStream = (id, formValues) => {
	return async (dispatch) => {
		const response = await streams.patch(`/streams/${id}`, formValues);
		dispatch({
			type: EDIT_STREAM,
			payload: response.data
		});
		history.push('/');
	};
};

export const deleteStream = (id) => {
	return async (dispatch) => {
		await streams.delete(`/streams/${id}`);
		dispatch({
			type: DELETE_STREAM,
			payload: id
		});
		history.push('/');
	};
};
