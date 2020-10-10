import { combineReducers } from 'redux';
// Named import, changing the name of the variable via sintax
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer
});
