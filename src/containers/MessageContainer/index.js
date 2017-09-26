import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';

/**
 * Finds a Message in the list by UUID
 *
 * @param {Object[]} messages
 * @param {string} uuid
 * @return {Object}
 */
const getMessageByUuid = (messages, uuid) => {
	return messages.find((message) => uuid === message.uuid);
};

/**
 * MessageContainer
 *
 * @param {Object[]} messages
 * @param {boolean} isLoading
 * @param {Object} match
 * @return {XML}
 * @constructor
 */
const MessageContainer = ({ messages, isLoading, match }) => {
	const message = getMessageByUuid(messages, match.params.uuid);

	if (isLoading) {
		return null;
	}

	if (!isLoading && !message) {
		return <Redirect to="/"/>;
	}

	return (
		<Grid>
			{message && (
				<Card>
					<CardHeader title={message.uuid}/>

					<CardContent>
						<Typography type="body1" component="p">{message.text}</Typography>
					</CardContent>

					<CardActions>
						<Link to="/" className="MessageContainer__button">
							<Button
								type="button"
								color="primary"
								raised={true}
								children="Return to Home"
							/>
						</Link>
					</CardActions>
				</Card>
			)}
		</Grid>
	);
};

// Mapping global state into component properties

const mapStateToProps = ({ message, application }) => ({
	isLoading : application.isFetching,
	messages  : message
});

export default connect(mapStateToProps)(MessageContainer);
