import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AppLoader from '../../containers/AppLoader';

/**
 * AppHeader
 *
 * @return {XML}
 * @constructor
 */
const AppHeader = () => {
	return (
		<header>
			<AppLoader/>
			<AppBar color="default" position="static">
				<Toolbar>
					<Typography type="headline" color="inherit">Redux PouchDB</Typography>
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default AppHeader;
