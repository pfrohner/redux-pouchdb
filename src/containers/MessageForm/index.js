import React from 'react';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Form, Field, reduxForm } from 'redux-form';
import TextField from '../../components/Form/TextField';
import generateRandomText from 'lorem-ipsum';
import './style.css';

/**
 * MessageForm
 *
 * @param {Function} handleSubmit
 * @param {Function} change
 * @param {Function} reset
 * @return {XML}
 * @constructor
 */
const MessageForm = ({ handleSubmit, change }) => {
	return (
		<Card>
			<Form onSubmit={handleSubmit} className="MessageForm">
				<CardContent>
					<Field
						type="text"
						name="text"
						component={TextField}
						label="Message"
						placeholder="Type message here"
					/>
				</CardContent>
				<CardActions>
					<Button
						type="submit"
						color="primary"
						raised={true}
						children="Save message"
					/>
					<Button
						children="Generate lorem ipsum"
						onClick={() => {
							change('text', generateRandomText())
						}}
					/>
				</CardActions>
			</Form>
		</Card>
	)
};

export default reduxForm({ form : 'message' })(MessageForm);
