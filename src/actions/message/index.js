import { Message as type } from '../types';

/**
 * Save action
 *
 * @param {Object} message
 * @return {Object}
 */
export const saveMessage = (message) => ({
	type : type.SAVE,
	message
});

/**
 * Remove action
 *
 * @param {string} uuid
 * @return {Object}
 */
export const removeMessage = (uuid) => ({
	type : type.REMOVE,
	uuid
});
