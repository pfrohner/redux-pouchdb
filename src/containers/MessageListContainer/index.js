import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import ActionBar from '../../components/ActionBar';
import MessageList from '../../components/MessageList';
import * as action from '../../actions/message';

/**
 * MessageListContainer
 */
class MessageListContainer extends PureComponent {
	handleCreate = (messageText) => {
		this.props.dispatch(action.saveMessage(messageText));
	};

	handleClick = (uuid) => {
		this.props.history.push(`/message/${uuid}`);
	};

	handleDelete = (uuid) => {
		this.props.dispatch(action.removeMessage(uuid));
	};

	render() {
		const { messages, isLoading } = this.props;

		return (
			<Grid>
				<ActionBar
					onMessageCreate={this.handleCreate}
				/>
				<MessageList
					isLoading={isLoading}
					messages={messages}
					onMessageClick={this.handleClick}
					onMessageDelete={this.handleDelete}
				/>
			</Grid>
		);
	}
}

// Mapping global state into component properties

const mapStateToProps = ({ message, application }) => ({
	isLoading : application.isFetching,
	messages  : message
});

export default connect(mapStateToProps)(MessageListContainer);
