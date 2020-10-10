import { CREATE_STREAMS, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAMS:
		case FETCH_STREAM:
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			/* In the next return statement happens the following:  
			1. We create a new object with the spread syntax and inside, we copy the current state. 
			2. We apply a reduce method over the payload array, we use the newState[stream.id] = stream syntax to create a new property which key is the stream instance id, and the value is the stream instance object itself
			3. We return this new object and is sent to the accumulator of the reduce function, which in this case it's initial value it's an empty object
			4. After the accumulator object is filled with the new streams, it get's copied with the spread operator in the same new object as the old state was copied in, merging both objects. 
			*/
			return {
				...state,
				...action.payload.reduce((newState, stream) => {
					newState[stream.id] = stream;
					return newState;
				}, {})
			};

		case DELETE_STREAM:
			// The omit is not a reserved word, it's just a literal that is not used and hence not evaluated, we just use it as a placeholder to destructure the object
			const { [action.payload]: omit, ...newState } = state;
			return newState;
		default:
			return state;
	}
};
