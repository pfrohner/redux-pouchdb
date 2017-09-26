import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommentIcon from 'material-ui-icons/Comment';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';

/**
 * Message
 *
 * @param {string} uuid
 * @param {string} text
 * @param {Function} onClick
 * @param {Function} onDelete
 * @return {XML}
 * @constructor
 */
const Message = ({ uuid, text, onClick, onDelete }) => {
	return (
		<ListItem button={true} onClick={() => { onClick(uuid) }}>
			<Avatar>
				<CommentIcon/>
			</Avatar>

			<ListItemText primary={text} secondary={uuid}/>

			<ListItemSecondaryAction>
				<IconButton onClick={() => { onDelete(uuid) }}>
					<DeleteIcon/>
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default Message;
