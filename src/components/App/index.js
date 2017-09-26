import React from 'react';
import Grid from 'material-ui/Grid';
import AppHeader from '../AppHeader';

/**
 * App
 *
 * @param {XML[]} children
 * @return {XML}
 * @constructor
 */
const App = ({ children }) => {
	return (
		<Grid>
			<AppHeader/>
			{children}
		</Grid>
	);
};

export default App;
