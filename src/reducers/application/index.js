import { INIT as POUCHDB_INIT } from 'redux-pouchdb';

/** @typedef {{ type: string }} ApplicationAction */
/** @typedef {{ isFetching: boolean }} ApplicationState */

/**
 * @type {ApplicationState} Initial state
 */
const initialState = {
	isFetching : true
};

/**
 * Application reducer
 *
 * @param {ApplicationState} state
 * @param {ApplicationAction} action
 * @return {ApplicationState}
 */
export default (state = initialState, action = {}) => {
	switch (action.type) {
		case POUCHDB_INIT :
			return { ...state, isFetching : false };
		default :
			return state;
	}
};
