import React from 'react';
import { SubmissionError } from 'redux-form';
import MessageForm from '../../containers/MessageForm';

/**
 * ActionBar
 *
 * @param {Function} onMessageCreate
 * @return {XML}
 * @constructor
 */
const ActionBar = ({ onMessageCreate }) => {
	return (
		<MessageForm onSubmit={({ text }, dispatch) => {
			if (!text || !text.trim()) {
				throw new SubmissionError({ text : 'Message field cannot be empty!' });
			}
			onMessageCreate(text);
		}}/>
	);
};

export default ActionBar;
