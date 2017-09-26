import { persistentReducer } from 'redux-pouchdb';
import { Message as type } from '../../actions/types';
import uuid from 'uuid/v1';

/** @typedef {Array} MessageState */
/** @typedef {{ type: string, message: Object }} MessageAction */

/**
 * Message reducer
 *
 * @param {MessageState} state
 * @param {MessageAction} action
 * @return {MessageState}
 */
export default persistentReducer((state = [], action = {}) => {
	switch (action.type) {
		case type.SAVE :
			return [...state, {
				uuid : uuid(),
				text : action.message,
				time : Date.now()
			}];

		case type.REMOVE :
			return state.filter(({ uuid }) => uuid !== action.uuid);

		default :
			return state;
	}
}, 'message');
