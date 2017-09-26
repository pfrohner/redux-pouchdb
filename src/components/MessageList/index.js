import React from 'react';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Message from '../Message';
import './style.css';

/**
 * MessageList
 *
 * @param {Object[]} messages
 * @param {boolean} isLoading
 * @param {Function} onMessageClick
 * @param {Function} onMessageDelete
 * @return {XML}
 * @constructor
 */
const MessageList = ({ messages, isLoading, onMessageClick, onMessageDelete }) => {
	return (
		<List className="MessageList">
			{messages.length === 0 &&
				<Typography align="center" type="caption">
					{isLoading ? 'Loading messages, please wait ...' : 'No messages found'}
				</Typography>
			}
			{messages.map(({ uuid, text }, i) => (
				<Message
					key={i}
					uuid={uuid}
					text={text}
					onClick={onMessageClick}
					onDelete={onMessageDelete}
				/>
			))}
		</List>
	);
};

export default MessageList;
