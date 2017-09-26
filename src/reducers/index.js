import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import application from './application';
import message from './message';

export default combineReducers({
	application,
	message,
	form : formReducer
});
